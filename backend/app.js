/* 
PROJECT DESCRIPTION:
EMPTY LIST  
- it can be used to add products that we need to buy when we go to the market simple!🙌
*/

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const itemRoutes = require("./routes/item");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.get("/", (req, res) => {
//   res.send("I am working fine");
// });

// Mongodb connection
mongoose.connect("mongodb://localhost:27017/emptylist").then(() => {
  console.log(`DB CONNECTED`);
});
// ROUTES
app.use("/api", itemRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT PORT: ${PORT}`);
});
