const { Apartment, User } = require("../models");
module.exports = {
  async getApartment(req, res, next) {
    try {
      const apartment = await Apartment.findAll();
      res.status(200).json({ message: "Apartment", apartment: apartment });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Error Fetching All Apartments" });
    }
  },
  async createApartment(req, res, next) {
    try {
      const userId = req.params.userId;
      const user = await User.findOne({ where: { id: userId } });

      if (!user)
        return res.status(449).json({ message: "Apartment Not Found" });
      let tobeCreated = req.body;
      tobeCreated["userId"] = userId;
      const apartment = await Apartment.create(tobeCreated);

      res
        .status(201)
        .json({ message: "Apartment Created", apartment: apartment });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Creating Apartments"
      });
    }
  },
  async singleApartment(req, res, next) {
    try {
      const apartmentId = req.params.apartmentId;
      const apartment = await Apartment.findOne({ where: { id: apartmentId } });

      if (!apartment)
        return res.status(449).json({ message: "Apartment Not Found" });
      res.status(200).json({ message: "Apartment", apartment: apartment });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Fetching Single Apartments"
      });
    }
  },

  async updateApartment(req, res, next) {
    try {
      const apartmentId = req.params.apartmentId;
      const apartment = await Apartment.findOne({ where: { id: apartmentId } });

      if (!apartment)
        return res.status(449).json({ message: "Apartment Not Found" });
      const updatedApartment = await apartment.update(req.body, {
        where: { id: apartmentId }
      });

      res
        .status(200)
        .json({ message: "Apartment Updated", apartment: updatedApartment });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Updating Apartments"
      });
    }
  },

  async deleteApartment(req, res, next) {
    try {
      const apartmentId = req.params.apartmentId;
      const apartment = await Apartment.findOne({ where: { id: apartmentId } });

      if (!apartment)
        return res.status(449).json({ message: "Apartment Not Found" });
      apartment.destroy({ where: { id: apartmentId } });
      res.status(200).json({ message: "Apartment Deleted" });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Updating Apartments"
      });
    }
  }
};
