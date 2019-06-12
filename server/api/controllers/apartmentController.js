const { Apartment, User } = require("../models");
const multer = require("multer");
const path = require("path");
const uniqueString = require("unique-string");

const pathChecker = /public/i;
// set Storage engine for multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/apartments/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

// Check File Type
function checkFileType(file, cb) {
  // allowed Extension
  const fileTypes = /jpeg|jpg|png|gif/;
  // Check ex
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  // check mimetype
  const mimetype = fileTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Error: Images Only");
  }
}

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).any();

// check if object is empty
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

module.exports = {
  async getApartment(req, res, next) {
    try {
      const apartment = await Apartment.findAll({
        order: [["id", "DESC"]]
      });
      res
        .status(200)
        .json({ message: "All Apartments", apartments: apartment });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Error Fetching All Apartments" });
    }
  },
  async createApartment(req, res, next) {
    try {
      upload(req, res, async err => {
        if (err) {
          return res.status(400).json({ message: err });
        } else {
          const user = await User.findOne({
            raw: true,
            where: { slug: req.params.userId }
          });

          const tobeCreated = req.body;
          tobeCreated["userId"] = user.id;
          tobeCreated["slug"] = uniqueString();

          Array.from(req.files).forEach((element, index) => {
            let path = element.path;
            tobeCreated[`imageUrl${index + 1}`] = path.replace(pathChecker, "");
          });

          const apartment = await Apartment.create(tobeCreated);
          res
            .status(200)
            .json({ message: "Apartment Created", apartment: apartment });
        }
      });
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

  async userApartment(req, res, next) {
    try {
      const userId = req.params.userId;
      const user = await User.findOne({
        where: { slug: userId },
        raw: true
      });
      if (!user) return res.status(449).json({ message: "Bad Request" });

      const apartment = await Apartment.findAll({
        where: { userId: user.id },
        order: [["id", "DESC"]]
      });
      res.status(200).json({
        message: "Apartment Fetch",
        apartments: apartment
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Fetching User Apartments"
      });
    }
  },

  async updateApartment(req, res, next) {
    try {
      const apartmentId = req.params.apartmentId;
      const apartment = await Apartment.findOne({
        where: { slug: apartmentId }
      });

      if (!apartment)
        return res.status(449).json({ message: "Apartment Not Found" });

      upload(req, res, async err => {
        if (err) return res.status(400).json({ message: err });

        const tobeUpdated = req.body;
        if (isEmpty(req.files)) {
          // No req.files
          const updatedApartment = await apartment.update(tobeUpdated, {
            where: { slug: apartmentId }
          });
          res.status(200).json({
            message: "Apartment Updated",
            apartment: updatedApartment
          });
        } else {
          // Images exist
          Array.from(req.files).forEach((image, index) => {
            let path = image.path;
            tobeUpdated[`imageUrl${index + 1}`] = path.replace(pathChecker, "");
          });

          const updatedApartment = await apartment.update(tobeUpdated, {
            where: { slug: apartmentId }
          });
          res.status(200).json({
            message: "Apartment Updated",
            apartment: updatedApartment
          });
        }
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Updating Apartment"
      });
    }
  },

  async deleteApartment(req, res, next) {
    try {
      const apartmentId = req.params.apartmentId;
      const apartment = await Apartment.findOne({
        where: { slug: apartmentId }
      });

      if (!apartment)
        return res.status(449).json({ message: "Apartment Not Found" });
      apartment.destroy({ where: { id: apartment.id } });
      res.status(200).json({ message: "Apartment Deleted" });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Updating Apartments"
      });
    }
  }
};
