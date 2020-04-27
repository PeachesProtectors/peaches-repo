'use strict'
/* global describe it */
const db = require('../server/db/db')
const {expect} = require('chai')
const seed = require('./seed')
const {User, Product, Order} = require('../server/db/models')

describe('seed script', () => {
  let products, orders, users
  beforeEach(async () => {
    await db.sync({force: true})
    await seed()

    products = await Product.findAll()
    users = await User.findAll()
  })

  it('creates at least 10 products', () => {
    expect(products).to.have.lengthOf.above(9)
  })

  it('creates at least 5 users', () => {
    expect(users).to.have.lengthOf.above(4)
  })

  it('completes successfully', seed)
})
