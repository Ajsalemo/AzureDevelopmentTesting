var express = require("express");
var router = express.Router();

const listOfProducts = [
  {
    id: 1,
    product_name: "Eggs",
  },
  {
    id: 2,
    product_name: "Milk",
  },
  {
    id: 3,
    product_name: "Bread",
  },
];

router.get("/", (req, res, next) => {
  res.json(listOfProducts)
});

module.exports = router;
