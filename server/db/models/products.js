const Sequelize = require('sequelize')
const db = require('../db')

const Products = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://shared.inmemoriam.be/flowers/ncba0et66c-bloemen-5.jpg'
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      isDecimal: false
    }
  },
  lightRequirement: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [['Low Light', 'Bright Light']]
    }
  }
})

module.exports = Products
