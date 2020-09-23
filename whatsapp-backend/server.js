// imports
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";

// app configurations
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());

// Database
const connection_url =
  "mongodb+srv://dpak:uPNGFbWT8BPZ7tSp@cluster0.lbokn.mongodb.net/whatsapp_db?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// routes
app.get("/", (req, res) => res.status(200).send("Hello there"));

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// server
app.listen(port, () =>
  console.log(`Server up an running at localhost ${port}`)
);
