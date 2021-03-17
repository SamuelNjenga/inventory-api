const db = require('../db/models/index')

exports.createSupplier = async data => {
  return db.Supplier.create(data)
}

exports.updateSupplier = async (data, root) => {
  return db.Supplier.update(data, root)
}

exports.getSuppliers = async () => {
  return db.Supplier.findAll()
}

exports.getSupplier = async data => {
  return db.Supplier.findOne(data)
}

exports.deleteSupplier = async data => {
  return db.Supplier.destroy(data)
}
