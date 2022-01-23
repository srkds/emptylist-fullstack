const express = require("express");
const {
  createItem,
  getItemById,
  updateItem,
  removeItem,
  getAllItems,
} = require("../controllers/item");

const router = express.Router();

router.param("itemId", getItemById);

router.get("/item", getAllItems);

router.post("/item/create", createItem);

router.put("/item/:itemId", updateItem);

router.delete("/item/:itemId", removeItem);

router.get("/sayhi", (req, res) => {
  res.send("Hey Mom🚀");
});

module.exports = router;
