const { Users } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.jwt.JWT_SECRET, {
    expiresIn: config.jwt.ONE_WEEK
  });
}

module.exports = {
  // Create User
  async register(req, res, next) {
    try {
      await Users.create(req.body).then(createdUser => {
        res
          .status(201)
          .json({ message: "User Created", data: createdUser.toJSON() });
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Creating User" });
    }
  },

  // Log User in
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ where: { email: email } });

      if (!user) {
        return res.status(403).json({ message: "Invalid Email" });
      }

      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        return res.status(403).json({ message: "Wrong Password" });
      }

      const userJSON = user.toJSON();
      res.status(200).json({
        message: "Success",
        data: userJSON,
        token: jwtSignUser(userJSON)
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Error Loging In" });
    }
  }
};
