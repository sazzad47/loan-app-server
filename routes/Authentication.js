const router = require("express").Router();
const { json } = require("express");
// const User = require("../models/User");
const bcrypt = require("bcrypt");

const { sequelize, User } = require("../models");

// REGISTER
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const newUser = await User.create({
      //   username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      state: req.body.state,
      zip_code: req.body.zip_code,
      city: req.body.city,
      phone: req.body.phone,
      dob: req.body.dob,
      ss_number: req.body.ss_number,
    });
    return res.status(201).json({ msg: "user saved successfully", newUser });
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    !user && res.status(400).json("Wrong Credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong Credentials!");

    const { password, ...others } = user;

    return res.status(200).json({ msg: "Success Login", response: others });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
