const db = require('../db/models/index')

exports.createProduct = async data => {
  return db.Product.create(data)
}

exports.updateProduct = async (data, root) => {
  return db.Product.update(data, root)
}

exports.getProducts = async () => {
  return db.Product.findAll()
}

exports.getProduct = async data => {
  return db.Product.findOne(data)
}

exports.deleteProduct = async data => {
  return db.Product.destroy(data)
}
