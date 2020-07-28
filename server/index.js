const express = require("express");
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const items = require("./routes/api/items")
const bodyparse = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(bodyparse.urlencoded({ extended: false }));
app.use(bodyparse.json());

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("mongodbconnected"))
  .catch(err => console.log(err));

//test api
app.get("/test", (req, res) => res.send("working"));

// passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

//use routes
app.use("/api/users/", users);
app.use("/api/items/",items);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
