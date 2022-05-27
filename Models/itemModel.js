const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter Item's name!"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Enter Item's Category"],
  },
  price: {
    type: Number,
    required: [true, "Enter Item's Price!"],
  },
  itemType: {
    type: String,
    required: [true, "Enter Item's type"],
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

});

module.exports = mongoose.model("Item", itemSchema);
