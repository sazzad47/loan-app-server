const router = require("express").Router();
const { sequelize, Dispute, User } = require("../models");
const path = require("path");

var multer = require("multer");
var upload = multer({ dest: "uploads/" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const user = req.body.email;
    cb(null, user + "-" + Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

// NEW DISPUTE
router.post(
  "/",
  upload.fields([
    { name: "equifax_report", maxCount: 1 },
    { name: "experian_report", maxCount: 1 },
    { name: "transUnion_report", maxCount: 1 },
  ]),
  async (req, res) => {
    const email = req.body.email;
    const equifax_report = req.files.equifax_report[0].path;
    const experian_report = req.files.experian_report[0].path;
    const transUnion_report = req.files.transUnion_report[0].path;

    const equifax = req.body.equifax;
    const trans_union = req.body.trans_union;
    const experian = req.body.experian;
    const reason = req.body.reason;
    const credit_furnisher = req.body.credit_furnisher;
    const instruction = req.body.instruction;
    const letter_name = req.body.letter_name;
    const account_number = req.body.account_number;
    const equifax_account = req.body.equifax_account;
    const experian_account = req.body.experian_account;
    const transUnion_account = req.body.transUnion_account;

    // const equifax_d2 = req.body.equifax_d2;
    // const trans_union_d2 = req.body.trans_union_d2;
    // const experian_d2 = req.body.experian_d2;
    // const reason_d2 = req.body.reason_d2;
    // const credit_furnisher_d2 = req.body.credit_furnisher_d2;
    // const instruction_d2 = req.body.instruction_d2;
    // const letter_name_d2 = req.body.letter_name_d2;
    // const account_number_d2 = req.body.account_number_d2;
    // const equifax_account_d2 = req.body.equifax_account_d2;
    // const experian_account_d2 = req.body.experian_account_d2;
    // const transUnion_account_d2 = req.body.transUnion_account_d2;

    // const equifax_d3 = req.body.equifax_d3;
    // const trans_union_d3 = req.body.trans_union_d3;
    // const experian_d3 = req.body.experian_d3;
    // const reason_d3 = req.body.reason_d3;
    // const credit_furnisher_d3 = req.body.credit_furnisher_d3;
    // const instruction_d3 = req.body.instruction_d3;
    // const letter_name_d3 = req.body.letter_name_d3;
    // const account_number_d3 = req.body.account_number_d3;
    // const equifax_account_d3 = req.body.equifax_account_d3;
    // const experian_account_d3 = req.body.experian_account_d3;
    // const transUnion_account_d3 = req.body.transUnion_account_d3;

    if (req.body.experian_letter === "") {
      experian_letter = "";
    } else {
      experian_letter = req.body.experian_letter;
    }

    if (req.body.trans_union_letter === "") {
      trans_union_letter = "";
    } else {
      trans_union_letter = req.body.trans_union_letter;
    }

    if (req.body.equifax_letter === "") {
      equifax_letter = "";
    } else {
      equifax_letter = req.body.equifax_letter;
    }

    try {
      // const newDocs = await Documents.create(req.body);
      const newDispute = await Dispute.create({
        email: email,
        equifax_report: equifax_report,
        experian_report: experian_report,
        transUnion_report: transUnion_report,
        equifax: equifax,
        trans_union: trans_union,
        experian: experian,
        reason: reason,
        credit_furnisher: credit_furnisher,
        instruction: instruction,
        letter_name: letter_name,
        experian_letter: experian_letter,
        trans_union_letter: trans_union_letter,
        equifax_letter: equifax_letter,
        account_number: account_number,
        equifax_account: equifax_account,
        experian_account: experian_account,
        transUnion_account: transUnion_account,

        // equifax_d2: equifax_d2,
        // trans_union_d2: trans_union_d2,
        // experian_d2: experian_d2,
        // reason_d2: reason_d2,
        // credit_furnisher_d2: credit_furnisher_d2,
        // instruction_d2: instruction_d2,
        // letter_name_d2: letter_name_d2,
        // account_number_d2: account_number_d2,
        // equifax_account_d2: equifax_account_d2,
        // experian_account_d2: experian_account_d2,
        // transUnion_account_d2: transUnion_account_d2,

        // equifax_d3: equifax_d3,
        // trans_union_d3: trans_union_d3,
        // experian_d3: experian_d3,
        // reason_d3: reason_d3,
        // credit_furnisher_d3: credit_furnisher_d3,
        // instruction_d3: instruction_d3,
        // letter_name_d3: letter_name_d3,
        // account_number_d3: account_number_d3,
        // equifax_account_d3: equifax_account_d3,
        // experian_account_d3: experian_account_d3,
        // transUnion_account_d3: transUnion_account_d3,
      });
      res
        .status(201)
        .json({ meassage: "Document created successfully", newDispute });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//GET ALL DISPUTES
router.get("/", async (req, res) => {
  const email = req.query.email;
  // console.log(admin);
  // if (admin != "admin@gmail.com") {
  //   res.status(401).json("Unauthorized!");
  // }
  try {
    let disputess;
    if (email) {
      disputess = await Dispute.findAll({ where: { email } });
    } else {
      disputess = await Dispute.findAll();
      // x = await user.findOne({ where: { id: element.user_id } });
    }

    res.status(200).json(disputess);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET SPECIFIC DISPUTE
router.get("/:id", async (req, res) => {
  if (admin != "admin@gmail.com") {
    res.status(401).json("Unauthorized!");
  }
  try {
    const doc = await Dispute.findOne(req.params.id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE DISPUTE
router.put("/:id", async (req, res) => {
  const email = req.body.email;
  if (admin != "admin@gmail.com") {
    res.status(401).json("Unauthorized!");
  }
  const doc = await Documents.findOne(req.params.id);
  if (email === post.email) {
    try {
      const doc = await Documents.findOne({ where: { id: req.params.id } });
      const updatedDoc = await doc.update(req.body);
      res.status(200).json(updatedDoc);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("Unauthorized!");
  }
});

// DELETE DISPUTE
router.delete("/:id", async (req, res) => {
  const user = req.body.email;
  const doc = await Documents.findOne({ where: { id: req.params.id } });
  if (user === post.email) {
    try {
      await doc.destroy();
      res.status(200).json("Post Deleted Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("Unauthorized!");
  }
});

module.exports = router;
