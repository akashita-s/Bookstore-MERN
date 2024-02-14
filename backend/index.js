import express, { response } from "express";
import { PORT, mongoDBurl } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';
import BooksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  return res.status(214).send("Welcome to the project 🤣");
});

app.use("/books", BooksRoute);

mongoose
  .connect(mongoDBurl)
  .then(() => {
    console.log("App connected to database ✨");
    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
