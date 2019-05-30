const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "GET request to /houses" });
});

router.post("/", (req, res, next) => {
  res.status(201).json({ message: "POST request to /houses" });
});

router.get("/:houseId", (req, res, next) => {
  const id = req.params.houseId;
  if (id === "special") {
    res.status(200).json({ message: "you discover the special ID", id: id });
  } else {
    res.status(200).json({ message: "You passes an ID" });
  }
});

router.patch("/:houseId", (req, res, next) => {
  res.status(200).json({ message: "Updated house!" });
});

router.delete("/:houseId", (req, res, next) => {
  res.status(200).json({ message: "Deleted house!" });
});

module.exports = router;
