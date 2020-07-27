const express = require("express");
const mongoose = require("mongoose");
const app = express();
const apiRoute = require("./routes/apiRoute");
const db = require("./models");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }, { useUnifiedTopology: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var MONGODB_URI = process.env.MONGODB.URI || "mongodb://localHeadlines";

mongoose.connect(MONGODB_URI);

const connection = mongoose.connection;

connection.on("connected", () => {
  db.Workout.find({}).then((workouts) => {
    // console.log(JSON.stringify(workouts, 0, 2));
  });
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.use(apiRoute);
require("./routes/viewRoute")(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
