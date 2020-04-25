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

const isAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    const err = new Error("You're not an admin!")
    err.status = 401
    return next(err)
  }
  next()
}

router.post('/', isAdmin, async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body)
    res.json(newProduct)
  } catch (err) {
    next(err)
  }
})

router.put('/:productId', isAdmin, async (req, res, next) => {
  try {
    const currProduct = await Product.findByPk(req.params.productId)
    if (currProduct) {
      const updatedProduct = await currProduct.update(req.body)
      res.json(updatedProduct)
    } else {
      res.status(404).json('Product not found')
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:productId', isAdmin, async (req, res, next) => {
  try {
    const currProduct = await Product.findByPk(req.params.productId)
    if (currProduct) {
      const name = currProduct.dataValues.name
      await Product.destroy({
        where: {id: req.params.productId}
      })
      res.send(`Goodbye ${name}!`)
    } else {
      res.status(404).json('Product not found')
    }
  } catch (err) {
    next(err)
  }
})
