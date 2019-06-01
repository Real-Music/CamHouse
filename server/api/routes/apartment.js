const express = require("express");
const apartmentController = require("../controllers/apartmentController");
const router = express.Router();

router.get("/", apartmentController.getApartment);

router.post("/:userId", apartmentController.createApartment);

router.get("/:apartmentId", apartmentController.singleApartment);

router.patch("/:apartmentId", apartmentController.updateApartment);

router.delete("/:apartmentId", (req, res, next) => {
  res.status(200).json({ message: "Deleted apartments!" });
});

module.exports = router;
