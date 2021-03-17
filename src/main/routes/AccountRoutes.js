const Router = require('express')
const userController = require('../controllers/UserController')

const router = Router()

router.post('/', userController.createAccount)
router.get('/', userController.getAccounts)
router.delete('/:id', userController.deleteAccount)
router.put('/:id', userController.updateAccount)

module.exports = router
