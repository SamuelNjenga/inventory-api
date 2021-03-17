const Router = require('express')
const productController = require('../controllers/ProductController')

const router = Router()

router.post('/', productController.createProduct)
router.get('/', productController.getProducts)
router.get('/:id', productController.getOneProduct)
router.delete('/:id', productController.deleteProduct)
router.put('/:id', productController.updateProduct)

module.exports = router
