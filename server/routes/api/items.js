const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const key = require("../../config/keys").secretOrKey;
const Item = require("../../models/Item");
const User = require("../../models/User");


router.post("/addItem", verifyToken, async (req, res) => {
    jwt.verify(req.Token, key, async (err, authData) => {
      if (err) {
        res.sendStatus(403);
      }
      Item.findOne({ name: req.body.name })
        .then((item) => {
          if (item) {
            res.status(403).json("item already exists");
          } else {
            const newItem = new Item({
              name: req.body.name,
              type: req.body.type,
            });
            newItem.save().then(res.json("item is added"));
          }
        })
        .catch((err) => console.log(err));
    });
  });

  router.get("/allItems", verifyToken, (req, res) => {
    jwt.verify(req.Token, key, async (err, authData) => {
      if (err) {
        res.sendStatus(403);
      }
      Item.find().then((response) => res.json(response));
    });
  });

  // delete material
router.post("/DeleteItem", verifyToken, async (req, res) => {
    // console.log(req.body);
    jwt.verify(req.Token, key, async (err, authData) => {
      if (err) {
        res.sendStatus(403);
      }
      Item.findByIdAndDelete(req.body.itemId).then((item) => {
        if (item) {
          res.json("deleted");
        } else {
          res.status(404);
        }
      });
    });
  });
  
  
  // Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers["authorization"];
    // Check if bearer is undefined
    if (typeof bearerHeader !== "undefined") {
      // Split at the space
      const bearer = bearerHeader.split(" ");
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.Token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  }
  module.exports = router;