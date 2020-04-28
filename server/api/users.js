const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

const isAdmin = (req, res, next) => {
  const {user} = req
  if (!user || !user.isAdmin) {
    const err = new Error("You're not an admin!")
    err.status = 401
    return next(err)
  }
  next()
}

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['firstName', 'lastName', 'id', 'email', 'isAdmin']
    })
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', isAdmin, async (req, res, next) => {
  const {params} = req
  try {
    const users = await User.findOne({
      where: {
        id: params.id
      },
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['firstName', 'lastName', 'id', 'email', 'isAdmin']
    })
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
})
router.put('/:id', isAdmin, async (req, res, next) => {
  const {body, params} = req
  try {
    const currUser = await User.findOne({
      where: {
        id: params.id
      }
    })

    if (currUser) {
      const updatedUser = await currUser.update(body)
      res.json(updatedUser)

    } else {
      res.status(404).json('User not found')
    }

  } catch (err) {
    next(err)
  }
})

