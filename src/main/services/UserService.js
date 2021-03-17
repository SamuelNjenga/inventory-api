const db = require('../db/models/index')

exports.createAccount = async data => {
  return db.Account.create(data)
}

exports.createUser = async data => {
  return db.User.create(data)
}

exports.updateAccount = async (data, root) => {
  return db.Account.update(data, root)
}

exports.updateUser = async (data, root) => {
  return db.User.update(data, root)
}

exports.getAccounts = async () => {
  return db.Account.findAll()
}

exports.getUsers = async () => {
  return db.User.findAll()
}

exports.deleteAccount = async data => {
  return db.Account.destroy(data)
}

exports.deleteUser = async data => {
  return db.User.destroy(data)
}

