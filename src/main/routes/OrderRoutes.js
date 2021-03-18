const Router = require('express')
const orderController = require('../controllers/OrderController')

const router = Router()

router.post('/', orderController.createOrder)
router.get('/', orderController.getOrders)
router.get('/:id', orderController.getOneOrder)
router.delete('/:id', orderController.deleteOrder)
router.put('/:id', orderController.updateOrder)

module.exports = router
