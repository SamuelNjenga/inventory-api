const db = require('../db/models/index')

exports.createSupplierProduct = async data => {
  return db.SupplierProduct.create(data)
}

exports.updateSupplierProduct = async (data, root) => {
  return db.SupplierProduct.update(data, root)
}

exports.getSupplierProducts = async () => {
  return db.SupplierProduct.findAll()
}

exports.getSupplierProduct = async data => {
  return db.SupplierProduct.findOne(data)
}

exports.deleteSupplierProduct = async data => {
  return db.SupplierProduct.destroy(data)
}
