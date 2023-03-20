const router = require("express").Router();
const { json } = require("express");
// const User = require("../models/User");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const { sequelize, User, Documents } = require("../models");

router.post("/update-password", async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    console.log(user);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    const updatedUser = await User.update(
      { password: newPassword },
      { where: { email } }
    );

    return res
      .status(200)
      .json({ msg: "Password updated successfully", updatedUser });
  } catch (err) {
    res.status(500).json(err);
  }
});

// REGISTER
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const newUser = await User.create({
      //   username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      state: req.body.state,
      zip_code: req.body.zip_code,
      city: req.body.city,
      phone: req.body.phone,
      dob: req.body.dob,
      ss_number: req.body.ss_number,
    });
    const newDocs = await Documents.create({
      email: req.body.email,
      photo_ID: "photo",
      proof_of_address: "photo",
      user_agreement_freeze: false,
      consumer_office_freeze: false,
      lexis_nexis_freeze: false,
      positive_account: false,
      boomplay: false,
      kikoff: false,
      self: false,
      creditstrong: false,
      experian: false,
      credit: false,
      innovice: false,
      clarityservices: false,
      chexsystems: false,
      sagestreamilc: false,
      smartcredit: false,
    });
    return res
      .status(201)
      .json({ msg: "user saved successfully", newUser, Document: newDocs });
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    !user && res.status(400).json("Wrong Credentials!");

    // const validated = await bcrypt.compare(req.body.password, user.password);
    // !validated && res.status(400).json("Wrong Credentials!");

    const { password, ...others } = user;

    return res.status(200).json({ msg: "Success Login", response: others });
  } catch (err) {
    res.status(500).json(err);
  }
});

function sendEmail({ recipient_email, OTP }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tgifactoringrecovery@gmail.com",
        pass: "npdpvycduobfxkjw",
      },
    });

    const mail_configs = {
      from: "tgifactoringrecovery@gmail.com",
      to: recipient_email,
      subject: "TGIFACTORING PASSWORD RECOVERY",
      html: `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - OTP Email Template</title>
  
</head>
<body>
<!-- partial:index.partial.html -->
<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Tgifactoring</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Tgifactoring. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
    <p style="font-size:0.9em;">Regards,<br />Tgifactoring</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>Tgifactoring</p>
      <p>1600 Amphitheatre Parkway</p>
      <p>California</p>
    </div>
  </div>
</div>
<!-- partial -->
  
</body>
</html>`,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occured` });
      }
      return resolve({ message: "Email sent succesfuly" });
    });
  });
}

router.post("/send_recovery_email", async (req, res) => {
  const { recipient_email } = req.body;
  const user = await User.findOne({ where: { email: recipient_email } });
  if (!user) {
    res.status(404).json(err);
  } else {
    console.log(req.body);
    sendEmail(req.body)
      .then((response) => res.send(response.message))
      .catch((error) => res.status(500).send(error.message));
  }
});

module.exports = router;
