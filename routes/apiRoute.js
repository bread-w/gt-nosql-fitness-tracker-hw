const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((workouts) => {
      console.log(workouts);
      res.json(workouts);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((createdWorkout) => {
      res.json(createdWorkout);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put("/api/workouts", (req, res) => {
  db.Workout.findOneAndUpdate(
    {
      id: req.body.id,
    },
    {
      exercises: req.body.exercises,
    }
  )
    .then((updatedWorkout) => {
      res.json(updatedWorkout);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
