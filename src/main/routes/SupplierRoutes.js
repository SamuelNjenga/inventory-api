const Router = require('express')
const supplierController = require('../controllers/SupplierController')

const router = Router()

router.post('/', supplierController.createSupplier)
router.get('/', supplierController.getSuppliers)
router.get('/:id', supplierController.getOneSupplier)
router.delete('/:id', supplierController.deleteSupplier)
router.put('/:id', supplierController.updateSupplier)

module.exports = router
