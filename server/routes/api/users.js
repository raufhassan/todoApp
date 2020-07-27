const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport"); 


// test api
router.get("/test", (req, res) =>
  res.json({ msg: "test api is working of users" })
);

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
  
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({email: req.body.email }).then((user) => {
      if (user) {
        errors.email = "Email already exists";
        return res.status(400).json(errors);
      } else {
        const newuser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        // password encryption  
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newuser.password, salt, (err, hash) => {
            if (err) throw err;
            newuser.local.password = hash;
            newuser
              .save()
              .then((user) => {
                res.json("sucessfully registered");
              })
              .catch((err) => console.log(err));
          });
        });
      }
    });
  });
  
  router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
  
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        errors.email = "User not found";
        return res.status(404).json(errors);
      }
       else
        bcrypt.compare(req.body.password, user.password).then((isMatch) => {
          if (isMatch) {
            // user matched
            const payload = {
              id: user.id,
              name: user.name,
              email: user.email,
            };
            //sign token
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token,
                });
              }
            );
          } else {
            errors.password = "Password incorrect";
            return res.status(400).json(errors);
          }
        });
    });
  });
  