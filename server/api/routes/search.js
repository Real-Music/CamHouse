const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");

router.post("/", searchController.query);
router.post("/provider", searchController.getHouseProvider);

module.exports = router;

//todo: unknow user should fil in the form and show interest
