const Router = require('express')
const orderDetailController = require('../controllers/OrderDetailController')

const router = Router()

router.post('/', orderDetailController.createOrderDetail)
router.get('/', orderDetailController.getOrderDetails)
router.get('/:id', orderDetailController.getOneOrderDetail)
router.delete('/:id', orderDetailController.deleteOrderDetail)
router.put('/:id', orderDetailController.updateOrderDetail)

module.exports = router
