const router = require('express').Router()
const {Product} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.productId)
    if (singleProduct) {
      res.json(singleProduct)
    } else {
      res.status(404).json('Product not found')
    }
  } catch (err) {
    next(err)
  }
})
