const express = require("express");
const singleRoomController = require("../controllers/singleRoomController");
const router = express.Router();

router.get("/", singleRoomController.getSingelRooms);

router.post("/:userId", singleRoomController.createSingleRoom);

router.get("/:roomId", singleRoomController.singleRoom);

router.patch("/:roomId", singleRoomController.updateSingleRoom);

router.delete("/:roomId", singleRoomController.deleteSingleRoom);

router.get("/user/:userId", singleRoomController.userRoom);
module.exports = router;
