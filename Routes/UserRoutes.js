const express = require("express");
const {
  createUser,
  logUser,
  verifyOtp,
} = require("../Controller/UserController");
const upload = require("../utils/multerConfig");
const { authToken } = require("../utils/JwtAuth");

const Router = express.Router();

Router.post("/sign-up", upload.single("userProfilePic"), createUser);
Router.post("/log-in", logUser);
Router.post("/verify-otp", verifyOtp);
Router.get("/auth-user", authToken);
module.exports = Router;
