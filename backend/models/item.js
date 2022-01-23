const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    maxlength: 100,
    required: true,
    trim: true,
  },
  icon: {
    type: String,
    maxlength: 10,
    required: true,
  },
  description: {
    type: String,
    maxlength: 200,
    trim: true,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Item", itemSchema);
