const { singleRoom, Studio, House, Apartment, User } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  async query(req, res, next) {
    try {
      if (req.body.location || req.body.price || req.body.title) {
        let result = [];
        const rooms = await singleRoom.findAll({
          raw: true,
          where: {
            // location: req.body.location,
            title: req.body.title,
            [Op.or]: [
              { location: req.body.location },
              { price: req.body.price }
              //   { title: req.body.title }
            ]
          }
        });
        const houses = await House.findAll({
          raw: true,
          where: {
            // location: req.body.location,
            title: req.body.title,
            [Op.or]: [
              { location: req.body.location },
              { price: req.body.price }
              //   { title: req.body.title }
            ]
          }
        });
        const studios = await Studio.findAll({
          raw: true,
          where: {
            // location: req.body.location,
            title: req.body.title,
            [Op.or]: [
              { location: req.body.location },
              { price: req.body.price }
              //   { title: req.body.title }
            ]
          }
        });
        const apartments = await Apartment.findAll({
          raw: true,
          where: {
            // location: req.body.location,
            title: req.body.title,
            [Op.or]: [
              { location: req.body.location },
              { price: req.body.price }
              //   { title: req.body.title }
            ]
          }
        });

        await rooms.forEach(room => {
          result.push(room);
        });

        await houses.forEach(house => {
          result.push(house);
        });

        await studios.forEach(studio => {
          result.push(studio);
        });
        await apartments.forEach(apartment => {
          result.push(apartment);
        });
        console.log(result);

        res.status(201).json(result);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Error Query" });
    }
  },
  async getHouseProvider(req, res, next) {
    try {
      console.log(req.body);
      switch (req.body.title) {
        case "Apartment":
          const apartment = await Apartment.findOne({
            raw: true,
            where: { id: req.body.id }
          });

          const user = await User.findOne({
            // raw: true,
            where: { id: apartment.userId }
          });

          res.status(200).json(user);
          break;
        case "House":
          const house = await House.findOne({
            raw: true,
            where: { id: req.body.id }
          });

          const houseProvider = await User.findOne({
            raw: true,
            where: { id: house.userId }
          });
          // console.log(houseProvider);
          res.status(200).json(houseProvider);
          break;
        case "Studio":
          const studio = await Studio.findOne({
            raw: true,
            where: { id: req.body.id }
          });
          console.log(studio);
          const studioProvider = await User.findOne({
            raw: true,
            where: { id: studio.userId }
          });

          res.status(200).json(studioProvider);
          break;
        case "Single Room":
          const room = await singleRoom.findOne({
            raw: true,
            where: { id: req.body.id }
          });

          const roomProvider = await User.findOne({
            where: { id: room.userId }
          });

          res.status(200).json(roomProvider);
          break;
        default:
          res.status(449).json({ message: "Notthingg" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Getting Provider" });
    }
  }
};
