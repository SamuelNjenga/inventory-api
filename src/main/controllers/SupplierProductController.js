const supplierProductService = require('../services/SupplierProductService')
const ReqValidator = require('../utils/validator')

exports.createSupplierProduct = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      supplierId: 'required|integer',
      productId: 'required|integer'
    })
    if (!valid) return
    const data = {
      supplierId: req.body.supplierId,
      productId: req.body.productId
    }

    await supplierProductService.createSupplierProduct(data)
    res.status(201).json(data)
  } catch (err) {
    console.log(err)
  }
}

exports.updateSupplierProduct = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      supplierId: 'required|integer',
      productId: 'required|integer'
    })
    if (!valid) return
    const data = {
      supplierId: req.body.supplierId,
      productId: req.body.productId
    }

    const supplierProductId = req.params.id
    await supplierProductService.updateSupplierProduct(data, {
      where: {
        id: supplierProductId
      }
    })
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
  }
}

exports.deleteSupplierProduct = async (req, res, next) => {
  try {
    const supplierProductId = req.params.id
    await supplierProductService.deleteSupplierProduct({
      where: {
        id: supplierProductId
      }
    })
    res.status(200).json({
      data: null,
      message: `SupplierProduct ${supplierProductId} has been deleted`
    })
  } catch (error) {
    next(error)
  }
}

exports.getSupplierProducts = async (req, res) => {
  try {
    const supplierProducts = await supplierProductService.getSupplierProducts()
    res.status(200).json(supplierProducts)
  } catch (err) {
    res.json({
      message: err
    })
  }
}

exports.getOneSupplierProduct = async (req, res) => {
  try {
    const supplierProductId = req.params.id
    console.log(supplierProductId)
    const supplierProduct = await supplierProductService.getSupplierProduct({
      where: { id: supplierProductId }
    })
    console.log(supplierProduct.id)
    res.status(200).json(supplierProduct)
  } catch (err) {
    res.json({
      message: err
    })
  }
}
