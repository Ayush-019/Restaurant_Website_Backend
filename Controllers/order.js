const Order = require("../Models/orderModel");
const asyncErrors = require("../Middlewares/asyncErrors");

exports.newOrder = asyncErrors(async (req, res, next) => {
  const { orderItems, itemsPrice, totalPrice, name, TableNo } = req.body;

  const order = await Order.create({
    orderItems,
    itemsPrice,
    totalPrice,
    name,
    TableNo,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

exports.getAllOrders = asyncErrors(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});
