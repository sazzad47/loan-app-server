const router = require("express").Router();
const { User, sequelize } = require("../models");
const bcrypt = require("bcrypt");

// GET ALL USERS
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET SPECIFIC USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  // find the user with the given email address
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    // update the user's fields with the given updates
    const updated = await user.update(req.body);
    res.json({ message: "User updated successfully", updated });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.put("/:id", async (req, res) => {
//   if (req.params.id === req.body.id) {
//     if (req.body.password) {
//       const salt = await bcrypt.genSalt(10);
//       req.body.password = await bcrypt.hash(req.body.password, salt);
//     }
//     try {
//       const updatedUser = await User.findOne({ where: { id: req.params.id } });
//       res.status(200).json({ msg: "User Update Success", updatedUser });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(401).json("Unauthorized");
//   }
// });

// DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });

    await user.destroy();

    return res.json({ message: `User ${user.email} deleted!` });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
