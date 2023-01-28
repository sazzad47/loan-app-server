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
