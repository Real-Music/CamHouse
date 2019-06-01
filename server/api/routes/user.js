const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const authenticationController = require("../policy/authenticationController");

router.get("/", UserController.getUsers); // All Users
router.get("/tenant", UserController.getTenants); // All Tenant
router.get("/provider", UserController.getProviders); // All Providers
router.get("/:userId", UserController.singleUser); // Single User

router.post("/login", UserController.login);
// router.post("/", authenticationController.register, UserController.register); // Create New User
router.post("/", UserController.register); // Create New User
router.patch("/:userId", UserController.updateUser);

router.delete("/:userId", UserController.deleteUser);
module.exports = router;
