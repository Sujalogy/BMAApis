const express = require("express");

const { getComments } = require("../controller/comment/getComment.controller")
const { addComment } = require("../controller/comment/addComment.controller")
const commentRouter = express.Router();

commentRouter.route("/").get(getComments)
commentRouter.post("/add", addComment)

module.exports = {
    commentRouter
}