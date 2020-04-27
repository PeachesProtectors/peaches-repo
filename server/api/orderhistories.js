const router = require('express').Router()
const {OrderHistory} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const history = await OrderHistory.findAll()
    res.json(history)
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
