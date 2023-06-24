const express = require("express");
const { registerUser } = require("../controller/User/register.controller");
const { loginUser } = require("../controller/User/login.controller");
const { logoutUser } = require("../controller/User/logout.controller");
const { getUser } = require("../controller/User/getUser.controller");

const { updateUser } = require("../controller/User/updateUser.controller");
const { getUserById } = require("../controller/User/getOneUser.controller");

const userRouter = express.Router();

userRouter.patch("/:id", updateUser);
userRouter.get("/:id", getUserById)
userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/logout").post(logoutUser);
userRouter.route("/").get(getUser);

module.exports = {
    userRouter
}