const { singleRoom, User } = require("../models");
module.exports = {
  async getSingelRooms(req, res, next) {
    try {
      const rooms = await singleRoom.findAll();
      res.status(200).json({ message: "Rooms", rooms: rooms });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Fetching All Single Rooms"
      });
    }
  },

  async createSingleRoom(req, res, next) {
    try {
      const userId = req.params.userId;
      const user = User.findOne({ where: { id: userId } });

      if (!user) return res.status(449).json({ message: "Room Not Found" });
      let tobeCreated = req.body;
      tobeCreated["userId"] = userId;
      const room = await singleRoom.create(tobeCreated);

      res.status(201).json({ message: "Room Created", room: room });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Creating Single Rooms"
      });
    }
  },

  async singleRoom(req, res, next) {
    try {
      const roomId = req.params.roomId;
      const room = await singleRoom.findOne({ where: { id: roomId } });

      if (!room) return res.status(200).json({ message: "Room Not Found" });
      res.status(200).json({ message: "Room", room: room });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Fetching Single Rooms"
      });
    }
  },

  async updateSingleRoom(req, res, next) {
    try {
      const roomId = req.params.roomId;
      const room = await singleRoom.findOne({ where: { id: roomId } });

      if (!room) return res.status(449).json({ message: "Room Not Found" });
      const tobeUpdated = await room.update(req.body, {
        where: { id: roomId }
      });

      res.status(200).json({ message: "Room Updated", room: tobeUpdated });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Updating Single Rooms"
      });
    }
  },
  async deleteSingleRoom(req, res, next) {
    try {
      const roomId = req.params.roomId;
      const room = await singleRoom.findOne({ where: { id: roomId } });

      if (!room) return res.status(449).json({ message: "Room Not Found" });
      room.destroy({ where: { id: roomId } });
      res.status(200).json({ message: "Room Deleted" });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Deleting Single Rooms"
      });
    }
  }
};
