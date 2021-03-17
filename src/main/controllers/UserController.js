const userService = require('../services/UserService')
const ReqValidator = require('../utils/validator')
const bcrypt = require('bcrypt')

async function hashPassword (password) {
  return await bcrypt.hash(password, 10)
}

exports.createAccount = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      email: 'required|string',
      role: 'required|integer'
    })
    if (!valid) return
    const data = {
      email: req.body.email,
      role: req.body.role
    }

    await userService.createAccount(data)
    res.status(201).json(data)
  } catch (err) {
    console.log(err)
  }
}

exports.createUser = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      firstName: 'required|string',
      lastName: 'required|string',
      email: 'required|string|email',
      password: 'required|string',
      accountId: 'required|integer'
    })
    if (!valid) return
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      accountId: req.body.accountId
    }
    const hashedPassword = await hashPassword(data.password)
    const newUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: hashedPassword,
      accountId: req.body.accountId
    }
    await userService.createUser(newUser)
    res.status(201).json(newUser)
  } catch (err) {
    console.log(err)
  }
}

exports.updateUser = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      firstName: 'required|string',
      lastName: 'required|string',
      email: 'required|string|email',
      password: 'required|string',
      accountId: 'required|integer'
    })
    if (!valid) return
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      accountId: req.body.accountId
    }
    const hashedPassword = await hashPassword(data.password)
    const newUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: hashedPassword,
      accountId: req.body.accountId
    }
    const userId = req.params.id
    await userService.updateUser(newUser, {
      where: {
        id: userId
      }
    })
    res.status(200).json(newUser)
  } catch (err) {
    console.log(err)
  }
}

exports.updateAccount = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      email: 'required|string',
      role: 'required|integer'
    })
    if (!valid) return
    const data = {
      email: req.body.email,
      role: req.body.role
    }

    const accountId = req.params.id
    await userService.updateAccount(data, {
      where: {
        id: accountId
      }
    })
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
  }
}

exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id
    await userService.deleteUser({
      where: {
        id: userId
      }
    })
    res.status(200).json({
      data: null,
      message: `User ${userId} has been deleted`
    })
  } catch (error) {
    next(error)
  }
}

exports.deleteAccount = async (req, res, next) => {
  try {
    const accountId = req.params.id
    await userService.deleteAccount({
      where: {
        id: accountId
      }
    })
    res.status(200).json({
      data: null,
      message: `Account ${accountId} has been deleted`
    })
  } catch (error) {
    next(error)
  }
}

exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers()
    res.status(200).json(users)
  } catch (err) {
    res.json({
      message: err
    })
  }
}

exports.getAccounts = async (req, res) => {
  try {
    const accounts = await userService.getAccounts()
    res.status(200).json(accounts)
  } catch (err) {
    res.json({
      message: err
    })
  }
}
