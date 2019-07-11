const express = require("express");
const apartmentController = require("../controllers/apartmentController");
const tokenAuthentication = require("../policy/tokenAuthentication");
const router = express.Router();

router.get("/", apartmentController.getApartment);

router.post("/:userId", apartmentController.createApartment);

router.get("/:apartmentId", apartmentController.singleApartment);

router.patch("/:apartmentId", apartmentController.updateApartment);

router.get("/user/:userId", apartmentController.userApartment);

router.delete("/:apartmentId", apartmentController.deleteApartment);

module.exports = router;
