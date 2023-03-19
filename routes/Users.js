const router = require("express").Router();
const { User, sequelize, Documents, Provider, Dispute } = require("../models");

// // GET ALL USERS
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
    const user = await User.findAll({ where: { id: req.params.id } });
    res.status(200).json(user);
  } catch (err) {
    console.log("Hello");
    res.status(500).json(err);
  }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  // find the user with the given email address
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    // update the user's fields with the given updates
    const updated = await user.update(req.body);
    res.json({ message: "User updated successfully", updated });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    const doc = await Documents.findOne({ where: { email: user.email } });
    const provider = await Provider.findOne({ where: { email: user.email } });
    const dispute = await Dispute.findOne({ where: { email: user.email } });

    await doc.destroy();
    await provider.destroy();
    await dispute.destroy();
    await user.destroy();

    return res.json({ message: `User ${user.email} deleted!` });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
