import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 3000;
const DB_URL =
  "mongodb+srv://user:user@cluster0.xov5pmq.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

const startApp = async () => {
  try {
    mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

startApp();
