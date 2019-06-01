const { House, User } = require("../models");
module.exports = {
  async getHouse(req, res, next) {
    try {
      const houses = await House.findAll({ raw: true });
      res.status(200).json({ message: "All House", houses: houses });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Fetching All Houses" });
    }
  },
  async createHouse(req, res, next) {
    try {
      const userId = req.params.userId;
      const user = User.findOne({ where: { id: userId } });
      if (!user) {
        return res.status(500).json({ message: "Bad Request" });
      }

      let tobeCreated = req.body;
      tobeCreated["userId"] = userId;
      const house = await House.create(tobeCreated);

      res.status(201).json({ message: "House Created", house: house.toJSON() });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Creating Houses" });
    }
  },
  async singleHouse(req, res, next) {
    try {
      const houseId = req.params.houseId;
      const house = await House.findOne({ where: { id: houseId } });

      if (!house) return res.status(449).json({ message: "House Not Found" });
      res.status(200).json({ message: "House", house: house });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Fetching Single House" });
    }
  },
  async updateHouse(req, res, next) {
    try {
      const houseId = req.params.houseId;
      const house = await House.findOne({ where: { id: houseId } });

      if (!house) return res.status(449).json({ message: "House Not Found" });
      const updatedHouse = await house.update(req.body, {
        where: { id: houseId }
      });
      res.status(200).json({ message: "House Updated", house: updatedHouse });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Updating House"
      });
    }
  },
  async deleteHouse(req, res, next) {
    try {
      const houseId = req.params.houseId;
      const house = await House.findOne({ where: { id: houseId } });

      if (!house) return res.status(449).json({ message: "House Not Found" });
      house.destroy({ where: { id: houseId } });
      res.status(200).json({ message: "House Deleted" });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Deleting House"
      });
    }
  }
};
