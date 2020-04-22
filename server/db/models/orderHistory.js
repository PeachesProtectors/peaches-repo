const Sequelize = require('sequelize')
const db = require('../db')

const OrderHistory = db.define('OrderHistory', {
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      isDecimal: false
    }
  }
})

module.exports = OrderHistory
