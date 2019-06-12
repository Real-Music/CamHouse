const { Studio, User } = require("../models");
const multer = require("multer");
const path = require("path");
const uniqueString = require("unique-string");

const pathChecker = /public/i;
// set Storage engine for multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/studios/");
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
  async getStudio(req, res, next) {
    try {
      const studio = await Studio.findAll();
      res.status(200).json({ message: "All Studio", studio: studio });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Fetching All Studio" });
    }
  },
  async userStudio(req, res, next) {
    try {
      const userId = req.params.userId;
      const user = await User.findOne({
        where: { slug: userId },
        raw: true
      });

      if (!user) return res.status(449).json({ message: "Bad Request" });

      const studio = await Studio.findAll({
        where: { userId: user.id },
        order: [["id", "DESC"]]
      });

      res.status(200).json({
        message: "Studio Fetch",
        studios: studio
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Fetching Users Studio" });
    }
  },
  async createStudio(req, res, next) {
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

          Array.from(req.files).forEach((image, index) => {
            let path = image.path;
            tobeCreated[`imageUrl${index + 1}`] = path.replace(pathChecker, "");
          });

          const studio = await Studio.create(tobeCreated);
          res.status(201).json({ message: "Studio Created", studio: studio });
        }
      });
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
      const studio = await Studio.findOne({ where: { slug: studioId } });

      if (!studio) return res.status(449).json({ message: "Studio Not Found" });

      upload(req, res, async err => {
        if (err) return res.status(400).json({ message: err });

        const tobeUpdated = req.body;
        if (isEmpty(req.files)) {
          // No req.files
          const updatedStudio = await studio.update(tobeUpdated, {
            where: { slug: studioId }
          });
          res.status(200).json({
            message: "Studio Updated",
            studio: updatedStudio
          });
        } else {
          // Images exist
          Array.from(req.files).forEach((image, index) => {
            let path = image.path;
            tobeUpdated[`imageUrl${index + 1}`] = path.replace(pathChecker, "");
          });

          const updatedStudio = await studio.update(tobeUpdated, {
            where: { slug: studioId }
          });
          res.status(200).json({
            message: "Studio Updated",
            studio: updatedStudio
          });
        }
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Updating Studio"
      });
    }
  },

  async deleteStudio(req, res, next) {
    try {
      const studioId = req.params.studioId;
      const studio = await Studio.findOne({ where: { slug: studioId } });

      if (!studio) return res.status(449).json({ message: "Studio Not Found" });
      studio.destroy({ where: { id: studio.id } });

      res.status(200).json({ message: "Studio Deleted" });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Deleting Studio"
      });
    }
  }
};
