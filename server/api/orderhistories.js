const router = require('express').Router()
const {OrderHistory} = require('../db/models')
const {Order, Product} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const history = await Order.findAll({
      where: {
        userId: req.user.id,
        orderStatus: 'complete'
      },
      include: [{model: Product}]
    })
    res.json(history)
  } catch (err) {
    next(err)
  }
})

router.get('/:orderId', async (req, res, next) => {
  try {
    const singleOrder = await OrderHistory.findAll({
      where: {
        orderId: req.params.orderId
      }
    })
    res.json(singleOrder)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newOrder = await OrderHistory.create(req.body)
    res.json(newOrder)
  } catch (err) {
    next(err)
  }
})
