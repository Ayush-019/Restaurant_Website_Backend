const router = require("express").Router();
const { registerUser, getUserDetails, getAllUsers } = require("../Controllers/userController");


router.post("/register", registerUser);
router.get("/getallusers", getAllUsers);
router.get(
  "/getuser/:id",
  getUserDetails
);


module.exports = router;
