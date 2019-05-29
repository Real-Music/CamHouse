const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "Get request to /studios" });
});

router.post("/", (req, res, next) => {
  res.status(201).json({ message: "POST request to /studios" });
});

router.get("/:studioId", (req, res, next) => {
  const id = req.params.studioId;
  if (id === "hi") {
    res.status(200).json({ message: "you discover the special Id", id: id });
  } else {
    res.status(200).json({ message: "You passes an ID" });
  }
});

router.patch("/:studioId", (req, res, next) => {
  res.status(200).json({ message: "Updated studio!" });
});

router.delete("/:studioId", (req, res, next) => {
  res.status(200).json({ message: "Deleted studio!" });
});

module.exports = router;
