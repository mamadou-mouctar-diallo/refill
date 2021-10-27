const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./views/users");
const operators = require("./views/operators");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const db = require("./config/keys").mongodbURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
//Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
app.use("/api/views/users/", users);
app.use("/api/views/operators/", operators);

// Server statuc assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Server running on port", PORT));
