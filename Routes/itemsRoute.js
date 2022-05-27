const router = require("express").Router();
const { createItem, updateItem, getAllItems, deleteItem, getItemById } = require("../Controllers/items");


router.get("/getallitems", getAllItems);
router.get("/getitem/:id", getItemById);
router.post(
  "/createitem",
  createItem
);
router.put(
  "/updateitem/:id",
  updateItem
)

router.delete(
  "/deleteitem/:id",
  deleteItem
)

module.exports = router;