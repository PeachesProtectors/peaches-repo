/* global describe beforeEach it */
const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')
let plant

describe('Product model', () => {
  beforeEach(() => {
    return db
      .sync({force: true})
      .then(() => {
        return Product.create({
          name: 'Hoya Heart Plant',
          description:
            'This Hoya kerrii cutting is commonly referred as a plant',
          imageUrl:
            'https://www.thesill.com/products/hoya-plant-potted?variant=30408483012713',
          price: 28,
          lightRequirement: 'Bright Light',
        })
      })
      .then((product) => {
        plant = product
        return plant
      })
  })

  describe('attributes ', () => {
    it('includes `name` field', () => {
      expect(plant.name).to.equal('Hoya Heart Plant')
    })
    it('includes `description` field', () => {
      expect(plant.description).to.equal(
        'This Hoya kerrii cutting is commonly referred as a plant'
      )
    })
    it('includes `imageUrl` field', () => {
      expect(plant.imageUrl).to.equal(
        'https://www.thesill.com/products/hoya-plant-potted?variant=30408483012713'
      )
    })
    it('includes `price` field', () => {
      expect(plant.price).to.equal(28)
    })
    it('includes `lightRequirement` field to be either `Low Light`, `Bright Light`', () => {
      expect('Bright Light').to.be.oneOf(['Bright Light', 'Low Light'])
    })
  })
}) // end describe('User model') 