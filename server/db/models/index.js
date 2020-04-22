const User = require('./user')
const Product = require('./products')
const Order = require('./order')
const OrderHistory = require('./orderHistory')

//One to many
Order.belongsTo(User)
User.hasMany(Order)

//Many to many
Order.belongsToMany(Product, {through: OrderHistory})
Product.belongsToMany(Order, {through: OrderHistory})
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Order
}
