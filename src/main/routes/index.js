const Router = require('express')

const AuthRoutes = require('./AuthRoutes')
const UserRoutes = require('./UserRoutes')
const AccountRoutes = require('./AccountRoutes')

const router = Router()

router.use('/login', AuthRoutes)
router.use('/users', UserRoutes)
router.use('/accounts', AccountRoutes)



module.exports = router
