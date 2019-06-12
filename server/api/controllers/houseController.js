const { House, User } = require("../models");
const multer = require("multer");
const path = require("path");
const uniqueString = require("unique-string");

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

// check if object is empty
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
module.exports = {
  async getHouse(req, res, next) {
    try {
      const houses = await House.findAll({
        // raw: true,
        order: [["id", "DESC"]]
      });
      res.status(200).json({ message: "All House", houses: houses });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Single House" });
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
          tobeCreated["slug"] = uniqueString();

          Array.from(req.files).forEach((element, index) => {
            let path = element.path;
            tobeCreated[`imageUrl${index + 1}`] = path.replace(pathChecker, "");
          });

          const house = await House.create(tobeCreated);
          res.status(200).json({ message: "House Created", house: house });
        }
      });
    } catch (error) {
      res.status(500).json({ message: "F" });
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
  async userHouse(req, res, next) {
    try {
      const userId = req.params.userId;
      const user = await User.findOne({
        where: { slug: userId },
        raw: true
      });
      if (!user) return res.status(449).json({ message: "Bad Request" });
      console.log(user.id);
      const house = await House.findAll({
        where: { userId: user.id },
        order: [["id", "DESC"]]
      });
      res.status(200).json({
        message: "Houses Fetch",
        houses: house
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Fetching Single House" });
    }
  },
  async updateHouse(req, res, next) {
    try {
      const houseId = req.params.houseId;
      const house = await House.findOne({
        // raw: true,
        where: { slug: houseId }
      });

      if (!house) return res.status(449).json({ message: "House Not Found" });
      upload(req, res, async err => {
        if (err) return res.status(400).json({ message: err });

        const tobeUpdated = req.body;
        if (isEmpty(req.files)) {
          // No req.files
          const updatedHouse = await house.update(tobeUpdated, {
            where: { slug: houseId }
          });
          res
            .status(200)
            .json({ message: "House Updated", house: updatedHouse });
        } else {
          // Images exist
          Array.from(req.files).forEach((image, index) => {
            let path = image.path;
            tobeUpdated[`imageUrl${index + 1}`] = path.replace(pathChecker, "");
          });

          const updatedHouse = await house.update(tobeUpdated, {
            where: { slug: houseId }
          });
          res
            .status(200)
            .json({ message: "House Updated", house: updatedHouse });
        }
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Updating House"
      });
    }
  },
  async deleteHouse(req, res, next) {
    try {
      const houseId = req.params.houseId;
      const house = await House.findOne({ where: { slug: houseId } });

      if (!house) return res.status(449).json({ message: "House Not Found" });
      house.destroy({ where: { id: house.id } });
      res.status(200).json({ message: "House Deleted" });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Deleting House"
      });
    }
  }
};
