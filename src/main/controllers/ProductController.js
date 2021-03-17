const productService = require('../services/ProductService')
const ReqValidator = require('../utils/validator')

exports.createProduct = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      name: 'required|string',
      description: 'required|string',
      quantity: 'required'
    })
    if (!valid) return
    const data = {
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity
    }

    await productService.createProduct(data)
    res.status(201).json(data)
  } catch (err) {
    console.log(err)
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      name: 'required|string',
      description: 'required|string',
      quantity: 'required'
    })
    if (!valid) return
    const data = {
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity
    }

    const productId = req.params.id
    await productService.updateProduct(data, {
      where: {
        id: productId
      }
    })
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
  }
}

exports.deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id
    await productService.deleteProduct({
      where: {
        id: productId
      }
    })
    res.status(200).json({
      data: null,
      message: `Product ${productId} has been deleted`
    })
  } catch (error) {
    next(error)
  }
}

exports.getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts()
    res.status(200).json(products)
  } catch (err) {
    res.json({
      message: err
    })
  }
}

exports.getOneProduct = async (req, res) => {
  try {
    const productId = req.params.id
    console.log(productId)
    const product = await productService.getProduct({
      where: { id: productId }
    })
    console.log(product.id)
    res.status(200).json(product)
  } catch (err) {
    res.json({
      message: err
    })
  }
}
