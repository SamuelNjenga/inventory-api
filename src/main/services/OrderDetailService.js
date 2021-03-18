const db = require('../db/models/index')

exports.createOrderDetail = async data => {
  return db.OrderDetail.create(data)
}

exports.updateOrderDetail = async (data, root) => {
  return db.OrderDetail.update(data, root)
}

exports.getOrderDetails = async () => {
  return db.OrderDetail.findAll()
}

exports.getOrderDetail = async data => {
  return db.OrderDetail.findOne(data)
}

exports.deleteOrderDetail = async data => {
  return db.OrderDetail.destroy(data)
}
