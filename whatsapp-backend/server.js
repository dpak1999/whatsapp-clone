// imports
import express from "express";

// app configurations
const app = express();
const port = process.env.PORT || 9000;

// middleware

// Database

// routes
app.get("/", (req, res) => res.status(200).send("Hello there"));

// server
app.listen(port, () =>
  console.log(`Server up an running at localhost ${port}`)
);
