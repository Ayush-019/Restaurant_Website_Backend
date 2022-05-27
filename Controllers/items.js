const item = require("../Models/itemModel");
const asyncErrors = require("../Middlewares/asyncErrors");

exports.createItem = asyncErrors(async (req, res, next) => {
    const Item = await item.create(req.body);

    res.status(200).json({
      success: true,
      Item,
      message: "New Item Created Successfully",
    });
})

exports.updateItem = asyncErrors(async (req, res, next) => {
    const Item = await item.findById(req.params.id);

  if (!Item) {
    return res.status(404).json({
      success: false,
      message: "Item Not Found",
    });
  }

  await Item.update(req.body);
  const updatedItem = await item.findById(req.params.id);
  res.status(200).json({
    success: true,
    message: "Item Updated Successfully",
    updatedItem,
  });
});

exports.deleteItem = asyncErrors(async (req, res, next) => {
  const Item = await item.findById(req.params.id);

  if (!Item) {
    return res.status(404).json({
      success: false,
      message: "Item Not Found",
    });
  }

  await Item.remove();
  res.status(200).json({
    success: true,
    message: "Item Removed Successfully",
  });
});


exports.getAllItems = asyncErrors(async (req, res, next) => {
    const Items = await item.find();
    res.status(200).json({
      success: true,
      Items,
      message: "All Istems",
    });
})

exports.getItemById = asyncErrors(async (req, res, next) => {
    const Item = await item.findById(req.params.id);
    res.status(200).json({
      success: true,
      Item,
      message: "Item Details",
    });
})