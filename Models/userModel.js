const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your name!"],
    minLength: [3, "Name must have more than 3 characters"],
  },

  MobileNo: {
    type: String,
    required: [true, "Please Enter your MobileNo.!"],
    unique: true,
  },

  TableNo: {
    type: String,
    required: [true, "Please Enter your TableNo.!"],
  },

});


module.exports = mongoose.model("User", userSchema);
