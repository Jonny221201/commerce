const asyncHandler = require('express-async-handler')
const Order = require('../models/orderModel');


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
        totalPrice } = req.body

    if(orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
        return
    } else {
        const order = new Order({
            orderItems, 
            user: req.user._id,
            deliveryAddress, 
            paymentMethod, 
            itemsPrice, 
            taxPrice, 
            deliveryPrice, 
            totalPrice
        })

        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
    }
})

module.exports = {
    addOrderItems
}