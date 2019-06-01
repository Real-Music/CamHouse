const { User } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const Op = require("sequelize").Op;
const Joi = require("joi");
const multer = require("multer");
const uniqueString = require("unique-string");

// set Storage engine for multer
const storage = multer.diskStorage({
  destination: "../../public/users/",
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
}).single("imageUrl");

// const upload = multer({
//   storage: storage
// }).single("imageUrl");

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.jwt.JWT_SECRET, {
    expiresIn: config.jwt.ONE_WEEK
  });
}

module.exports = {
  // Get All User
  async getUsers(req, res, next) {
    try {
      const users = await User.findAll({
        include: [{ all: true }]
      });

      res.status(200).json({ message: "All Users", users: users });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Fetching All Users" });
    }
  },

  async getProviders(req, res, next) {
    try {
      const provider = await User.findAll({
        include: [{ all: true }],
        where: { isHouseProvider: true }
      });
      res.status(200).json({ message: "House Providers", provider: provider });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Fetching All Provider" });
    }
  },

  async getTenants(req, res, next) {
    try {
      const tenants = await User.findAll({ where: { isHouseProvider: false } });
      res.status(200).json({ message: "Tenants", tenants: tenants });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Fetching All Tenants" });
    }
  },

  async singleUser(req, res, next) {
    try {
      const userId = req.params.userId;
      const user = await User.findOne({
        where: { id: userId },
        include: [{ all: true }]
      });
      if (!user) return res.status(449).json({ message: "User not found" });
      res.status(200).json({ message: "User", user: user });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Fetching Single User" });
    }
  },
  // Create User
  async register(req, res, next) {
    try {
      upload(req, res, err => {
        console.log(uniqueString());
        console.log(req.file);
        console.log();
        console.log(req.body);
        if (err) {
          res.status(400).json({ message: err });
        } else {
          res.status(200).json({ user: req.file });
        }
      });

      // const user = await User.create(req.body);

      // res.status(201).json({ message: "User Created", user: user.toJSON() });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Creating User" });
    }
  },

  async updateUser(req, res, next) {
    try {
      const userId = req.params.userId;
      const user = await User.findOne({ where: { id: userId } });
      console.log(user);
      if (!user) return res.status(449).json({ message: "User Not Found" });

      const updatedUser = await user.update(req.body, {
        where: { id: userId }
      });
      res.status(200).json({ message: "User Updated", user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Updating User" });
    }
  },
  // TODO work more on this
  async deleteUser(req, res, next) {
    try {
      const userId = req.params.userId;
      const user = await User.findOne({ where: { id: userId } });

      if (!user) return res.status(449).json({ message: "User Not Found" });

      user.destroy({ where: { id: userId.id } });
      res.status(200).json({ message: "User Deleted" });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Deleting User" });
    }
  },
  // Log User in
  async login(req, res, next) {
    try {
      const { password } = req.body;
      async function access() {
        const user = await User.findOne({
          include: [{ all: true }],
          where: {
            [Op.or]: [
              { phone: req.body.phone ? req.body.phone : null },
              { email: req.body.email ? req.body.email : null }
            ]
          }
        });

        if (!user) {
          return res.status(403).json({ message: "User Not Found" });
        }

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
          return res.status(403).json({ message: "Wrong Password" });
        }

        const userJSON = user.toJSON();
        res.status(200).json({
          message: "Success",
          user: userJSON,
          token: jwtSignUser(userJSON)
        });
      }
      // Validating Email of Phone
      const Phoneschema = Joi.object().keys({
        phone: Joi.string().regex(/^[0-9]{9,9}$/)
      });
      const Emailscheme = Joi.object().keys({
        email: Joi.string()
          .email({ minDomainAtoms: 2 })
          .required()
      });

      if (req.body.email) {
        Joi.validate({ email: req.body.email }, Emailscheme, (error, value) => {
          if (error) {
            switch (error.details[0].context.key) {
              case "email":
                res.status(400).json({
                  message: "Please provide a valid email"
                });
                break;
              default:
                res.status(400).json({ message: "Invalid Credentails" });
            }
          } else {
            access();
          }
        });
      } else if (req.body.phone) {
        Joi.validate({ phone: req.body.phone }, Phoneschema, (error, value) => {
          if (error) {
            switch (error.details[0].context.key) {
              case "phone":
                res.status(400).json({
                  message: "Phone number must be 9 digit long"
                });
                break;
              default:
                res.status(400).json({ message: "Invalid Credentails" });
            }
          } else {
            access();
          }
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Error Loging In" });
    }
  }
};
