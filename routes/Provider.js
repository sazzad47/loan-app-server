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
      where: { email: req.params.email },
    });
    res.status(200).json(provider);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const provider = await Provider.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      phone_no: req.body.phone_no,
      security_word: req.body.security_word,
      report_provider: req.body.report_provider,
    });
    res.status(201).json(provider);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE Provider
router.put("/:email", async (req, res) => {
  // find the user with the given email address

  try {
    const user = await Provider.findOne({ where: { email: req.params.email } });
    // update the user's fields with the given updates
    const updated = await user.update(req.body);
    res.json({ message: "Provider details updated successfully", updated });
  } catch (err) {
    res.status(500).json(err);
  }
});

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
