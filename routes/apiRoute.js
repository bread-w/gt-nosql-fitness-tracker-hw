const router = require("express").Router();
const db = require("../models");

router.get("/exercise", (req, res) => {
  db.Workout.find({})
    .then((workouts) => {
      console.log(workouts);
      res.json(workouts);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/exercise", (req, res) => {
  db.Workout.create(req.body)
    .then((createdWorkout) => {
      res.json(createdWorkout);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put("/exercise", (req, res) => {
  db.Workout.findOneAndUpdate(
    {
      id: req.body.id,
    },
    {
      exercises: req.body.exercises,
    }
  );
});

module.exports = router;
