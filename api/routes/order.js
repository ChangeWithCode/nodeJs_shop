const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling get methods for orders",
  });
});

router.post("/", (req, res, next) => {
  const order = {
    productId : req.body.productId,
    quantity : req.body.quantity
  };
  res.status(200).json({
    message: "Order created",
    order : order
  });
});

router.get("/:orderId", (req, res, next) => {
  const id = req.params.orderId;

  res.status(200).json({
    message: "Order details",
    id: id,
  });
});

router.patch("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "UPDATED ID for oder",
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "DELETED ID for order",
  });
});

module.exports = router;
