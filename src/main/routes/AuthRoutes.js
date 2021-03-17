const Router = require('express')
const authController = require('../controllers/AuthController')

const router = Router()

router.post('/', authController.login)

module.exports = router
