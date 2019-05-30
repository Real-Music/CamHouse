const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const authenticationController = require("../policy/authenticationController");

// Get All User
router.get("/", authenticationController.register, UserController.register);

// Create New User
router.post("/", authenticationController.register, UserController.register);
router.post("/login", authenticationController.login, UserController.login);
router.get("/:userId", (req, res, next) => {
  res.status(200).json({ message: "Get Single User" });
});

router.patch("/:userId", (req, res, next) => {
  res.status(200).json({ message: "User Updated" });
});

router.delete("/:userId", (req, res, next) => {
  res.status(200).json({ message: "User Updated" });
});
module.exports = router;
