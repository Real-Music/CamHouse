const { Studio, User } = require("../models");
module.exports = {
  async getStudio(req, res, next) {
    try {
      const studio = await Studio.findAll();
      res.status(200).json({ message: "All Studio", studio: studio });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Fetching All Studio" });
    }
  },

  async createStudio(req, res, next) {
    try {
      const userId = req.params.userId;
      const user = await User.findOne({
        where: { id: userId }
      });

      if (!user) return res.status(449).json({ message: "Studio Not Found" });

      let tobeCreated = req.body;
      tobeCreated["userId"] = userId;
      const studio = await Studio.create(tobeCreated);

      res.status(201).json({ message: "Studio Created", studio: studio });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Creating Studio" });
    }
  },

  async singleStudio(req, res, next) {
    try {
      const studioId = req.params.studioId;
      const studio = await Studio.findOne({ where: { id: studioId } });

      if (!studio) return res.status(449).json({ message: "Studio Not Found" });
      res.status(200).json({ message: "Studio", studio: studio });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Creating Studio" });
    }
  },

  async updateStudio(req, res, next) {
    try {
      const studioId = req.params.studioId;
      const studio = await Studio.findOne({ where: { id: studioId } });

      if (!studio) return res.status(449).json({ message: "Studio Not Found" });
      const updatedStudio = await studio.update(req.body, {
        where: { id: studioId }
      });

      res
        .status(200)
        .json({ message: "Studio Updated", studio: updatedStudio });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Updating Studio"
      });
    }
  },

  async deleteStudio(req, res, next) {
    try {
      const studioId = req.params.studioId;
      const studio = await Studio.findOne({ where: { id: studioId } });

      if (!studio) return res.status(449).json({ message: "Studio Not Found" });
      studio.destroy({ where: { id: studioId } });

      res.status(200).json({ message: "Studio Deleted" });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Deleting Studio"
      });
    }
  }
};
