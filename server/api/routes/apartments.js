const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "GET request to /apartments" });
});

router.post("/", (req, res, next) => {
  res.status(201).json({ message: "POST request to /apartments" });
});

router.get("/:apartmentId", (req, res, next) => {
  const id = req.params.houseId;
  if (id === "special") {
    res.status(200).json({ message: "you discover the special ID", id: id });
  } else {
    res.status(200).json({ message: "You passes an ID" });
  }
});

router.patch("/:apartmentId", (req, res, next) => {
  res.status(200).json({ message: "Updated apartments!" });
});

router.delete("/:apartmentId", (req, res, next) => {
  res.status(200).json({ message: "Deleted apartments!" });
});

module.exports = router;
