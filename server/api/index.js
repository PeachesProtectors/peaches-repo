const router = require('express').Router()
module.exports = router

const isLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.sendStatus(403)
  }
  next()
}

const isAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    const err = new Error("You're not an admin!")
    err.status = 401
    return next(err)
  }
  next()
}

router.use('/users', isAdmin, require('./users'))
router.use('/products', isAdmin, require('./products'))
router.use('/orders', isLoggedIn, require('./orders'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
