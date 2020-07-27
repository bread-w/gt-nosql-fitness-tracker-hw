const path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/stats.html"));
  });

  app.get("/workout", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/workout.html"));
  });
};
