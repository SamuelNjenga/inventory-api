const Router = require('express')

const AuthRoutes = require('./AuthRoutes')
const UserRoutes = require('./UserRoutes')
const AccountRoutes = require('./AccountRoutes')
const ProductRoutes = require('./ProductRoutes')
const SupplierRoutes = require('./SupplierRoutes')
const SupplierProductRoutes = require('./SupplierProductRoutes')


const router = Router()

router.use('/login', AuthRoutes)
router.use('/users', UserRoutes)
router.use('/accounts', AccountRoutes)
router.use('/products', ProductRoutes)
router.use('/suppliers', SupplierRoutes)
router.use('/supplierProducts', SupplierProductRoutes)




module.exports = router
