/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {
    const name = 'Fuchsia Orchid'
    const description = 'Best Plant'
    const imageUrl = 'test.com'
    const price = 100
    const lightRequirement = 'Bright Light'

    beforeEach(() => {
      return Product.create({
        name: name,
        description: description,
        imageUrl: imageUrl,
        price: price,
        lightRequirement: lightRequirement
      })
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].price).to.be.equal(price)
      expect(res.body[0].description).to.be.equal(description)
    })
  }) // end describe('/api/products')
}) // end describe('Product routes')
