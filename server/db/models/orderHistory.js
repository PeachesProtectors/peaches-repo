const Sequelize = require('sequelize')
const db = require('../db')

const OrderHistory = db.define('OrderHistory', {
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      isDecimal: false
    }
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: true,
    validate: {
      isEmail: true
    }
  }
})

module.exports = OrderHistory
