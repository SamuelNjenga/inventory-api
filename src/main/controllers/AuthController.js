const authService = require('../services/AuthService')
const jwt = require('jsonwebtoken')
const ReqValidator = require('../utils/validator')
const bcrypt = require('bcrypt')

async function validatePassword (plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword)
}

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await authService.getUser({
      where: {
        email: email
      }
    })
    if (!user) return next(new Error('Email does not exist'))
    const validPassword = await validatePassword(password, user.password)
    if (!validPassword) return next(new Error('Password is not correct'))
    const accessToken = jwt.sign(
      {
        userId: user.id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d'
      }
    )
    await authService.updateUser(accessToken, {
      where: {
        id: user.id
      }
    })
    res.status(200).json({
      data: {
        email: user.email,
        id: user.id
      },
      accessToken
    })
  } catch (error) {
    next(error)
  }
}

