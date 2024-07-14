require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const fileUploade = require("express-fileupload");

const productRouter = require("./routes/product.routes");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connection");

app.use(express.static("./public"));
app.use(express.json());
app.use(fileUploade());

app.get("/", (req, res) => {
  res.send("<h1>File upload starter</h1>");
});

app.use("/api/v1/products", productRouter);

// middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
