const router = require('express').Router()
const {Product, Order, OrderHistory} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.user.id,
        orderStatus: 'pending'
      },
      include: [{model: Product}]
    })
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  let localCart = req.body || []
  try {
    // get pending order for a userID (logged in)
    // get the orderID

    const [order] = await Order.findOrCreate({
      where: {
        userId: req.user.id,
        orderStatus: 'pending'
      },
      include: [{model: Product}]
    })

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
        through: {quantity: localCart[i].quantity, price: plant.price}
      })
    }

    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})

//change order process to 'complete' after checkout
