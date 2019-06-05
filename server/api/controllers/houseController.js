const { House, User } = require("../models");
const multer = require("multer");
const path = require("path");

const pathChecker = /public/i;
// set Storage engine for multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/houses/");
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
          Array.from(req.files).forEach((element, index) => {
            let path = element.path;
            tobeCreated[`imageUrl${index + 1}`] = path.replace(pathChecker, "");
          });

          const house = await House.create(tobeCreated);
          // console.log(req.files, req.params, req.body, user);
          res.status(200).json({ message: "House Created", house: house });
        }
      });
    } catch (error) {
      console.log(error);
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
