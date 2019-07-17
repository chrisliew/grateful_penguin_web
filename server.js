const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("./schema/Gratitudes");
require("./schema/User");
require("./config/passport-setup-facebook");
const cors = require("cors");
const keys = require("./config/keys");
const path = require("path");
const passport = require("passport");

const app = express();

app.use(cors());

// Bodyparser Middleware
app.use(bodyParser.json()); // <--- Here
app.use(bodyParser.urlencoded({ extended: true }));

// DB config
const db = keys.mongoURL;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  next();
});

app.use(passport.initialize());
app.use(passport.session());

// Use Routes
require("./routes/gratitudes-routes")(app);
require("./routes/auth-routes-facebook")(app);
require("./routes/auth-routes")(app);

// Code for production env

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static("client/build"));

  // Express will serve up index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
