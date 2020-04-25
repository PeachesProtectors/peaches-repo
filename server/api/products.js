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

router.get('/low-light', async (req, res, next) => {
  try {
    const lowLightProducts = await Product.findAll({
      where:{
        lightRequirement: 'Low Light'
      }
    })
    res.json(lowLightProducts)
  } catch (err) {
    next(err)
  }
})

router.get('/bright-light', async (req, res, next) => {
  try {
    const brightLightProducts = await Product.findAll({
      where:{
        lightRequirement: 'Bright Light'
      }
    })
    res.json(brightLightProducts)
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
