const router = require('express').Router()
const {Product, Order, OrderHistory} = require('../db/models')

module.exports = router

//load cart for login user
router.get('/cart', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.user.id,
        orderStatus: 'pending'
      },
      include: [{model: Product}]
    })
    const cart = order.products.map(p => {
      return {
        id: p.id,
        name: p.name,
        imageUrl: p.imageUrl,
        price: p.price,
        quantity: p.OrderHistory.quantity
      }
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

//update cart
router.post('/cart', async (req, res, next) => {
  const {body} = req
  let localCart = body || []
  try {
    // get pending order for a login userID
    const [order] = await Order.findOrCreate({
      where: {
        userId: req.user.id,
        orderStatus: 'pending'
      },
      include: [{model: Product}]
    })

    //clear the cart for userID
    await OrderHistory.destroy({
      where: {
        orderId: order.id
      }
    })

    //overwrite products in through table
    for (let i = 0; i < localCart.length; i++) {
      const plant = await Product.findOne({
        where: {
          id: localCart[i].id
        }
      })
      order.addProduct(plant, {
        through: {quantity: localCart[i].quantity, price: localCart[i].price}
      })
    }
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})

//checkout for login user
router.put('/cart', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.user.id,
        orderStatus: 'pending'
      },
      include: [{model: Product}]
    })
    await order.update({orderStatus: 'complete'})
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})

//guest-to-login merge cart
router.post('/cart/merge', async (req, res, next) => {
  const {body} = req
  let localCart = body || []
  try {
    const [order] = await Order.findOrCreate({
      where: {
        userId: req.user.id,
        orderStatus: 'pending'
      },
      include: [{model: Product}]
    })
    let ids = order.products.map(p => p.id)
    for (let i = 0; i < localCart.length; i++) {
      if (ids.includes(localCart[i].id)) {
        const product = order.products.find(p => p.id === localCart[i].id)
        const newQty = localCart[i].quantity + product.OrderHistory.quantity
        await OrderHistory.update(
          {quantity: newQty},
          {
            where: {
              orderId: order.id,
              productId: localCart[i].id
            }
          }
        )
      } else {
        const plant = await Product.findOne({
          where: {
            id: localCart[i].id
          }
        })
        order.addProduct(plant, {
          through: {quantity: localCart[i].quantity, price: localCart[i].price}
        })
      }
    }
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})
