const Item = require("../models/item");

exports.getItemById = (req, res, next, id) => {
  Item.findById(id).exec((err, item) => {
    if (err) {
      return res.status(400).json({ error: `Failed to get Item: ${err}` });
    }
    req.item = item;
    next();
  });
};

exports.createItem = (req, res) => {
  let item = new Item(req.body);
  item.save((err, item) => {
    if (err) {
      return res.status(400).json({ error: `Failed To add item: ${err}` });
    }
    res.json({ item });
  });
};

exports.getItem = (req, res) => {
  return res.json(req.item);
};

exports.getAllItems = (req, res) => {
  Item.find().exec((err, items) => {
    if (err) {
      return res.status(400).json({ error: `No categories found! : ${err}` });
    }
    res.json(items);
  });
};

exports.updateItem = (req, res) => {
  const item = req.item;
  item.name = req.body.name;
  item.description = req.body.description;
  item.icon = req.body.icon;
  item.price = req.body.price;

  item.save((err, item) => {
    if (err) {
      return res.status(400).json({ error: `Failed to update item : ${err}` });
    }
    res.json(item);
  });
};

exports.removeItem = (req, res) => {
  const item = req.item;
  item.remove((err, item) => {
    if (err) {
      return res.status(400).json({ error: `Failed to remove item: ${err}` });
    }
    res.json({
      message: `Item Removed Successfuly ${item}`,
    });
  });
};
