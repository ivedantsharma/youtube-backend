import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import express from "express";

dotenv.config({
  path: "./env",
});

// const app = express();

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!!", err);
  });
