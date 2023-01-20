const express = require("express");
const app = express();
const authRoute = require("./routes/Authentication");
const userRoute = require("./routes/Users");
const docsRoute = require("./routes/Documents");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const { sequelize } = require("./models");

// app.post("/users", async (req, res) => {
//   const { email, role } = req.body;

//   try {
//     const user = await User.create({
//       email,
//       role,
//       password: req.body.password,
//     });

//     return res.json(user);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json(err);
//   }
// });

// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.findAll();
//     return res.status(200).json({ users: users });
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });

// app.get("/users/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const user = await User.findOne({ where: { id } });
//     return res.status(200).json(user);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });

// app.put("/users/:email", async (req, res) => {
//   // find the user with the given email address
//   try {
//     const user = await User.findOne({ where: { id: req.params.email } });
//     // update the user's fields with the given updates
//     await user.update(req.body);
//     res.json({ message: "User updated successfully" });
//   } catch (err) {}
// });

// app.put("/users/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const user = await User.findOne({ where: { id: id } });
//     await user.update(req.body);
//     return res.status(200).json(user);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });

// app.delete("/users/:uuid", async (req, res) => {
//   const uuid = req.params.uuid;
//   try {
//     const user = await User.findOne({ where: { uuid } });

//     await user.destroy();

//     return res.json({ message: "User deleted!" });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// });

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/docs", docsRoute);
// app.use("/cat", catRoute);

port = process.env.PORT || "5000";
app.listen("5000", async () => {
  console.log("Server up on http://localhost:5000");
  // await sequelize.authenticate();
  // await sequelize.sync({ force: true });
  await sequelize.sync();
  console.log("Database Connected!");
});
