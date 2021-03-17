const supplierService = require('../services/SupplierService')
const ReqValidator = require('../utils/validator')

exports.createSupplier = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      name: 'required|string'
    })
    if (!valid) return
    const data = {
      name: req.body.name
    }

    await supplierService.createSupplier(data)
    res.status(201).json(data)
  } catch (err) {
    console.log(err)
  }
}

exports.updateSupplier = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      name: 'required|string'
    })
    if (!valid) return
    const data = {
      name: req.body.name
    }

    const supplierId = req.params.id
    await supplierService.updateSupplier(data, {
      where: {
        id: supplierId
      }
    })
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
  }
}

exports.deleteSupplier = async (req, res, next) => {
  try {
    const supplierId = req.params.id
    await supplierService.deleteSupplier({
      where: {
        id: supplierId
      }
    })
    res.status(200).json({
      data: null,
      message: `Supplier ${supplierId} has been deleted`
    })
  } catch (error) {
    next(error)
  }
}

exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await supplierService.getSuppliers()
    res.status(200).json(suppliers)
  } catch (err) {
    res.json({
      message: err
    })
  }
}

exports.getOneSupplier = async (req, res) => {
  try {
    const supplierId = req.params.id
    console.log(supplierId)
    const supplier = await supplierService.getSupplier({
      where: { id: supplierId }
    })
    console.log(supplier.id)
    res.status(200).json(supplier)
  } catch (err) {
    res.json({
      message: err
    })
  }
}
