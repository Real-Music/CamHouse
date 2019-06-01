const express = require("express");
const studioController = require("../controllers/studioController");
const router = express.Router();

router.get("/", studioController.getStudio);

router.post("/:userId", studioController.createStudio);

router.get("/:studioId", studioController.singleStudio);

router.patch("/:studioId", studioController.updateStudio);

router.delete("/:studioId", studioController.deleteStudio);
module.exports = router;
