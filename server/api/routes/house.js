const express = require("express");
const router = express.Router();
const tokenAuthentication = require("../policy/tokenAuthentication");
const houseController = require("../controllers/houseController");

router.get("/", houseController.getHouse); // Get all houses
router.get("/:houseId", houseController.singleHouse); // Get Single House

router.post("/:userId", tokenAuthentication, houseController.createHouse); // Create House

router.patch("/:houseId", houseController.updateHouse); // Update House

router.delete("/:houseId", houseController.deleteHouse); // Delete House

module.exports = router;
