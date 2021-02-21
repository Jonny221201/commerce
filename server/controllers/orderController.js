const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

// @desc   Create new order
// @route   POST /orders
// @access   Private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    deliveryAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    deliveryPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      deliveryAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      deliveryPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc  Get order by ID
// @route   GET /orders/:id
// @access   Private

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Buyurtma Topilmadi");
  }
});

// @desc  Update order to paid
// @route   GET /orders/:id/pay
// @access   Private

const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaidValue = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    }

    const updatedOrder = await order.save()

    res.json(updatedOrder)

  } else {
    res.status(404);
    throw new Error("Buyurtma Topilmadi");
  }
});

// @desc  Get logged in user orders
// @route   GET /order/myorders
// @access   Private

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
  res.json(orders)
 
});

// @desc  Get all orders
// @route   GET /order/orders
// @access   Private/Admin

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name')
  res.json(orders)
 
});

// @desc  Update order to delivered
// @route   GET /orders/:id/deliver
// @access   Private/Admin

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isDelivered = true
    order.deliveredAt = Date.now()

    const updatedOrder = await order.save()

    res.json(updatedOrder)

  } else {
    res.status(404);
    throw new Error("Buyurtma Topilmadi");
  }
});



module.exports = {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
};


