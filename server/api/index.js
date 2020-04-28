const router = require('express').Router()
module.exports = router

const isLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.sendStatus(403)
  }
  next()
}

router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/orders', isLoggedIn, require('./orders'))
router.use('/orderhistories', isLoggedIn, require('./orderhistories'))
router.use('/guest', require('./guestOrder'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
