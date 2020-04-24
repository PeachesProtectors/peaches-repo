const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  orderDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  orderStatus: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'pending',
    validate: {
      isIn: [['pending', 'complete']]
    }
  }
})

module.exports = Order
