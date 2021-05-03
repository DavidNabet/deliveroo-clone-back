const express = require("express");
const cors = require("cors");
const data = require("./data.json");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json(data);
});

app.all("*", (req, res) => {
  res.status(400).json("All routes");
});

// Heroku va nous fournir une variable process.env.PORT
if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log("Server started");
  });
} else {
  app.listen(3200, () => {
    console.log("Server started");
  });
}
