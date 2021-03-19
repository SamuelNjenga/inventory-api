const Router = require('express')
const db = require('../db/models/index')
const { crud, sequelizeCrud } = require('express-sequelize-crud')


const AuthRoutes = require('./AuthRoutes')
const UserRoutes = require('./UserRoutes')
const AccountRoutes = require('./AccountRoutes')
const ProductRoutes = require('./ProductRoutes')
const SupplierRoutes = require('./SupplierRoutes')
const OrderRoutes = require('./OrderRoutes')
const SupplierProductRoutes = require('./SupplierProductRoutes')
const OrderDetailRoutes = require('./OrderDetailRoutes')

const router = Router()

router.use('/login', AuthRoutes)
router.use('/users', UserRoutes)
router.use('/accounts', AccountRoutes)
router.use('/products', ProductRoutes)
router.use('/suppliers', SupplierRoutes)
router.use('/orders', OrderRoutes)
router.use('/supplierProducts', SupplierProductRoutes)
router.use('/orderDetails', OrderDetailRoutes)

router.use(crud('/admin/products', sequelizeCrud(db.Product)))
router.use(crud('/admin/suppliers', sequelizeCrud(db.Supplier)))
router.use(crud('/admin/supplierProducts', sequelizeCrud(db.SupplierProduct)))
router.use(crud('/admin/orders', sequelizeCrud(db.Order)))
router.use(crud('/admin/orderDetails', sequelizeCrud(db.OrderDetail)))


module.exports = router
