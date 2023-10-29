
const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();

const authRoute = require("./routes/Authentication");
const userRoute = require("./routes/Users");
const docsRoute = require("./routes/Documents");
const dispRoute = require("./routes/Dispute");
const provRoute = require("./routes/Provider");
const paymentRoute = require("./routes/Payment");

app.use(express.json());
const cors = require("cors");
const allowedOrigins = ['http://localhost:3000', 'https://jade-dragon-3b012c.netlify.app', 'http://services.tgiscaleme.com'];

app.use(cors({
  origin: allowedOrigins,
}));

const { sequelize } = require("./models");

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/docs", docsRoute);
app.use("/dispute", dispRoute);
app.use("/provider", provRoute);
app.use('/payment', paymentRoute)

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
port = process.env.PORT || "5000";
app.listen("4000", async () => {
  console.log("Server up on http://localhost:4000");
  await sequelize.authenticate();
  // await sequelize.sync({ force: true });
  // await sequelize.sync();
  console.log("Database Connected!");
});


