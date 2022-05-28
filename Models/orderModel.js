const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [false, "Please Enter name!"],
    minLength: [3, "Name must have more than 3 characters"],
  },

  // MobileNo: {
  //   type: String,
  //   required: [false, "Please MobileNo.!"],
  //   // unique: true,
  // },

  TableNo: {
    type: String,
    required: [false, "Please Enter TableNo.!"],
  },

  orderItems: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  ],

  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Order", orderSchema);
