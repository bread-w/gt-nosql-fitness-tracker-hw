const router = require("express").Router();
const db = require("../models");

router.get("/exercise", (req, res) => {
  db.Exercise.find({}).then((exercises) => {
    console.log(exercises);
    res.json(exercises);
  });
});

module.exports = router;
