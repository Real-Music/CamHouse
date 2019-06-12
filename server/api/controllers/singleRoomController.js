const { singleRoom, User } = require("../models");
const multer = require("multer");
const path = require("path");
const uniqueString = require("unique-string");

const pathChecker = /public/i;
// set Storage engine for multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/singleRooms/");
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

          const room = await singleRoom.create(tobeCreated);
          res.status(201).json({ message: "Room Created", rooms: room });
        }
      });
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

  async userRoom(req, res, next) {
    try {
      const userId = req.params.userId;
      const user = await User.findOne({ where: { slug: userId }, raw: true });
      if (!user) return res.status(449).json({ message: "Bad Request" });

      const room = await singleRoom.findAll({
        where: { userId: user.id },
        order: [["id", "DESC"]]
      });

      res.status(200).json({
        message: "Room Fetch",
        rooms: room
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Erro Fetching Users Rooms" });
    }
  },

  async updateSingleRoom(req, res, next) {
    try {
      const roomId = req.params.roomId;
      const room = await singleRoom.findOne({ where: { slug: roomId } });

      if (!room) return res.status(449).json({ message: "Room Not Found" });

      upload(req, res, async err => {
        console.log(req.body);
        if (err) return res.status(400).json({ message: err });

        const tobeUpdated = req.body;
        if (isEmpty(req.files)) {
          // No req.files
          const updatedRoom = await room.update(tobeUpdated, {
            where: { slug: roomId }
          });
          res.status(200).json({
            message: "Room Updated",
            room: updatedRoom
          });
        } else {
          {
            // Images exist
            Array.from(req.files).forEach((image, index) => {
              let path = image.path;
              tobeUpdated[`imageUrl${index + 1}`] = path.replace(
                pathChecker,
                ""
              );
            });

            const updatedRoom = await room.update(tobeUpdated, {
              where: { slug: roomId }
            });
            res.status(200).json({
              message: "Room Updated",
              room: updatedRoom
            });
          }
        }
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Updating Single Rooms"
      });
    }
  },
  async deleteSingleRoom(req, res, next) {
    try {
      const roomId = req.params.roomId;
      const room = await singleRoom.findOne({ where: { slug: roomId } });

      if (!room) return res.status(449).json({ message: "Room Not Found" });
      room.destroy({ where: { id: room.id } });
      res.status(200).json({ message: "Room Deleted" });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error Deleting Single Rooms"
      });
    }
  }
};
