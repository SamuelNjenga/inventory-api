const Router = require('express')
const supplierProductController = require('../controllers/SupplierProductController')

const router = Router()

router.post('/', supplierProductController.createSupplierProduct)
router.get('/', supplierProductController.getSupplierProducts)
router.get('/:id', supplierProductController.getOneSupplierProduct)
router.delete('/:id', supplierProductController.deleteSupplierProduct)
router.put('/:id', supplierProductController.updateSupplierProduct)

module.exports = router
