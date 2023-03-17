const router = require("express").Router();
const { User, sequelize, Documents, Provider } = require("../models");
const bcrypt = require("bcrypt");

// // GET ALL Provider
router.get("/", async (req, res) => {
  try {
    const providers = await Provider.findAll();
    res.status(200).json(providers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET Provider
router.get("/:email", async (req, res) => {
  try {
    const provider = await Provider.findAll({
      where: { id: req.params.email },
    });
    res.status(200).json(providers);
  } catch (err) {
    console.log("Hello");
    res.status(500).json(err);
  }
});

// // UPDATE Provider
// router.put("/:id", async (req, res) => {
//   // find the user with the given email address
//   if (req.body.password) {
//     const salt = await bcrypt.genSalt(10);
//     req.body.password = await bcrypt.hash(req.body.password, salt);
//   }
//   try {
//     const user = await User.findOne({ where: { id: req.params.id } });
//     // update the user's fields with the given updates
//     const updated = await user.update(req.body);
//     res.json({ message: "User updated successfully", updated });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // DELETE Provider details
// router.delete("/:id", async (req, res) => {
//   try {
//     const user = await User.findOne({ where: { id: req.params.id } });

//     await user.destroy();

//     return res.json({ message: `User ${user.email} deleted!` });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// });

module.exports = router;
