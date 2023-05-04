const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/user.model");

const userRoute = express.Router();
userRoute.post("/register", async (req, res) => {
  const { first_name, last_name, mobile_number, email, password, gender } =
    req.body;
  try {
    bcrypt.hash(password, 6, async (err, hash) => {
      // Store hash in your password DB.
      const newUser = new UserModel({
        first_name,
        last_name,
        mobile_number,
        email,
        password: hash,
        gender,
      });
      await newUser.save();
      //   console.log(newUser);
      res.status(200).send({ msg: "Registered Successfully" });
    });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          const token = jwt.sign({ userId: user._id }, "masai");
          res.status(200).send({ msg: "Login Succesful", token: token });
        } else {
          res.status(200).send({ msg: "Wrong credentials" });
        }
      });
    } else {
      res.status(200).send({ msg: "Wrong credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = { userRoute };
