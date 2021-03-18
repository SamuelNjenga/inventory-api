const orderDetailService = require('../services/OrderDetailService')
const ReqValidator = require('../utils/validator')

exports.createOrderDetail = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      orderId: 'required|integer',
      productId: 'required|integer'
    })
    if (!valid) return
    const data = {
      orderId: req.body.orderId,
      productId: req.body.productId
    }

    await orderDetailService.createOrderDetail(data)
    res.status(201).json(data)
  } catch (err) {
    console.log(err)
  }
}

exports.updateOrderDetail = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      orderId: 'required|integer',
      productId: 'required|integer'
    })
    if (!valid) return
    const data = {
      orderId: req.body.orderId,
      productId: req.body.productId
    }

    const orderDetailId = req.params.id
    await orderDetailService.updateOrderDetail(data, {
      where: {
        id: orderDetailId
      }
    })
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
  }
}

exports.deleteOrderDetail = async (req, res, next) => {
  try {
    const orderDetailId = req.params.id
    await orderDetailService.deleteOrderDetail({
      where: {
        id: orderDetailId
      }
    })
    res.status(200).json({
      data: null,
      message: `OrderDetail ${orderDetailId} has been deleted`
    })
  } catch (error) {
    next(error)
  }
}

exports.getOrderDetails = async (req, res) => {
  try {
    const orderDetails = await orderDetailService.getOrderDetails()
    res.status(200).json(orderDetails)
  } catch (err) {
    res.json({
      message: err
    })
  }
}

exports.getOneOrderDetail = async (req, res) => {
  try {
    const orderDetailId = req.params.id
    console.log(orderDetailId)
    const orderDetail = await orderDetailService.getOrderDetail({
      where: { id: orderDetailId }
    })
    console.log(orderDetailId.id)
    res.status(200).json(orderDetail)
  } catch (err) {
    res.json({
      message: err
    })
  }
}
