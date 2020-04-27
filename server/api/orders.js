const router = require('express').Router()
const {Product, Order, OrderHistory} = require('../db/models')

module.exports = router

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

router.post('/cart', async (req, res, next) => {
  let localCart = req.body || []
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

    //overwrite products in through table with local storage data instead
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

// router.get('/', async (req, res, next) => {
//   try {
//     const order = await Order.findOne({
//       where: {
//         userId: req.user.id,
//         // orderStatus: 'pending'
//       }
//     })
//     res.json(order)
//   } catch (err) {
//     next(err)
//   }
// })

// router.delete('/', async (req, res, next) => {
//   try {
//     const deleteOrder = await Order.destroy({
//       where: {
//         userId: req.user.id,
//         orderStatus: 'complete'
//       }
//     })
//     res.json(deleteOrder)
//   } catch (err) {
//     next(err)
//   }
// })
