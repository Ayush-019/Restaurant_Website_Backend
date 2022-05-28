const router = require("express").Router();
const { newOrder, getAllOrders } = require("../Controllers/order");

router.route("/order/new").post(newOrder);
router.route("/orders").get(getAllOrders);
module.exports = router;
