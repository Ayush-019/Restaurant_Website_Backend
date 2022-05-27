const User = require("../Models/UserModel");
const asyncErrors = require("../Middlewares/asyncErrors");

//User Register
exports.registerUser = asyncErrors(async (req, res, next) => {
  const { name, MobileNo, TableNo } = req.body;

  if (!name || !MobileNo || !TableNo) {
    throw {
      status: 402,
      message: "Please fill all necessary fields",
    };
  }

  const user = await User.create({
    name,
    MobileNo,
    TableNo,
  });

  res.status(200).json({
    success: true,
    user,
    isRegistered: true,
    message: "User Registered Successfully",
  });
});


//Get user Details
exports.getUserDetails = asyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json(user);
});

//get all users
exports.getAllUsers = asyncErrors(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
  });
});

