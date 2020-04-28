const router = require('express').Router()
const {Product, Order} = require('../db/models')

module.exports = router

//checkout for guest
router.post('/', async (req, res, next) => {
  const {body} = req
  let localCart = body.cart || []
  try {
    const guestOrder = await Order.create({
      userId: null,
      orderStatus: 'complete'
    })

    for (let i = 0; i < localCart.length; i++) {
      const plant = await Product.findOne({
        where: {
          id: localCart[i].id
        }
      })
      guestOrder.addProduct(plant, {
        through: {
          quantity: localCart[i].quantity,
          price: localCart[i].price,
          email: body.email
        }
      })
    }
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})
