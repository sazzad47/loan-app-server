const router = require("express").Router();
const { sequelize, Dispute } = require("../models");
const path = require("path");

var multer = require("multer");
var upload = multer({ dest: "uploads/" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "credit_report/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const username = req.body.email;
    cb(null, username + "-" + Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

// NEW DISPUTE
router.post(
  "/",
  // (req, res, next) => {
  //   if (!req.body.email) {
  //     return res.status(400).send({ error: "email is required" });
  //   }
  //   next();
  // },
  upload.single("credit_report"),
  async (req, res) => {
    const credit_report = req.file.path;
    const letter_type = req.body.letter_type;
    const email = req.body.email;
    const equifax = req.body.equifax;
    const experian = req.body.experian;
    const trans_union = req.body.trans_union;
    const letter_name = req.body.letter_name;
    try {
      // const newDocs = await Documents.create(req.body);

      const newDispute = await Dispute.create({
        email: email,
        credit_report: credit_report,
        letter_name: letter_name,
        letter_type: letter_type,
        equifax: equifax,
        trans_union: trans_union,
        experian: experian,
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
  try {
    let docs;
    if (email) {
      docs = await Documents.findAll({ where: { email } });
    } else {
      docs = await Documents.findAll();
    }
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET SPECIFIC DISPUTE
router.get("/:id", async (req, res) => {
  try {
    const doc = await Documents.findOne(req.params.id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE DISPUTE
router.put("/:id", async (req, res) => {
  const email = req.body.email;
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
