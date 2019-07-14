const Gratitudes = require("../schema/Gratitudes");
const keys = require("../config/keys");

module.exports = app => {
  // GET /api/gratitudes * Returns list of all upcoming gratitudes * PRIVATE
  app.get("/api/gratitudes/", (req, res) => {
    Gratitudes.find()
      .sort({ dateOrder: -1 })
      .then(gratitudes => res.json(gratitudes));
  });

  // POST /api/gratitudes * add gratitude * PRIVATE
  app.post("/api/gratitudes/", (req, res) => {
    const newGratitudes = new Gratitudes({
      gratitude: req.body.gratitude,
      mood: req.body.mood,
      date: req.body.date
    });
    newGratitudes.save().then(gratitudes => res.json(gratitudes));
  });
};
