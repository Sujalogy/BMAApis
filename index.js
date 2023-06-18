const express = require("express");
const cors = require("cors");


const { connection } = require("./database/database");
const { userRouter } = require("./routes/user.routes");
const { bookRouter } = require("./routes/book.routes");
const { addressRouter } = require("./routes/address.routes");
const { commentRouter } = require("./routes/comment.routes");
const { auth } = require("./middleware/auth.middleware");
require("dotenv").config();


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter);
app.use(auth);
app.use("/book", bookRouter);
app.use("/comments", commentRouter);
app.use("/address", addressRouter);

const port = process.env.PORT;
app.listen(port, async () => {
  try {
    console.log("server is running...");
    await connection;
    console.log("Database connected successfully...");
  } catch (error) {
    console.log("Database not connected...");
    console.log("server is not running...");
  }
});
