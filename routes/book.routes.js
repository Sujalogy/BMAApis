const express = require("express");
const { getOneBook } = require("../controller/Book/getOneBook.controller");
const { getAllBook } = require("../controller/Book/getAllBook.controller");
const { deleteBook } = require("../controller/Book/deleteBook.controller");
const { updateBook } = require("../controller/Book/updateBook.controller");
const { addBook } = require("../controller/Book/addBook.controller")
const bookRouter = express.Router();

bookRouter.route("/:id").get(getOneBook)
bookRouter.route("/").get(getAllBook)
bookRouter.post("/add", addBook)
bookRouter.route("/delete/:id").delete(deleteBook)
bookRouter.route("/update/:id").put(updateBook)

module.exports = {
    bookRouter
}