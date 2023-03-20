const router = require("express").Router();
const { sequelize, Documents } = require("../models");
const path = require("path");

var multer = require("multer");
var upload = multer({ dest: "uploads/" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const username = req.body.email;
    cb(null, username + "-" + Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

// NEW POST
router.post(
  "/",
  upload.fields([
    { name: "photo_ID", maxCount: 1 },
    { name: "proof_of_address", maxCount: 1 },
  ]),
  async (req, res) => {
    const photo_ID = req.files.photo_ID[0].path;
    const proof_of_address = req.files.proof_of_address[0].path;
    const email = req.body.email;
    const user_agreement_freeze = req.body.user_agreement_freeze;
    const consumer_office_freeze = req.body.consumer_office_freeze;
    const lexis_nexis_freeze = req.body.lexis_nexis_freeze;
    const teletrack_freeze = req.body.teletrack_freeze;
    const boompay = req.body.boompay;
    const kikoff = req.body.kikoff;
    const self = req.body.self;
    const creditstrong = req.body.creditstrong;
    const experian = req.body.experian;
    const credit = req.body.credit;
    const innovice = req.body.innovice;
    const clarityservices = req.body.clarityservices;
    const checksystems = req.body.checksystems;
    const sagestreamilc = req.body.sagestreamilc;
    const smartcredit = req.body.smartcredit;
    try {
      // const newDocs = await Documents.create(req.body);

      const newDocs = await Documents.create({
        email: email,
        photo_ID: photo_ID,
        proof_of_address: proof_of_address,
        user_agreement_freeze: user_agreement_freeze,
        consumer_office_freeze: consumer_office_freeze,
        lexis_nexis_freeze: lexis_nexis_freeze,
        teletrack_freeze: teletrack_freeze,
        boompay: boompay,
        kikoff: kikoff,
        self: self,
        creditstrong: creditstrong,
        experian: experian,
        credit: credit,
        innovice: innovice,
        clarityservices: clarityservices,
        checksystems: checksystems,
        sagestreamilc: sagestreamilc,
        smartcredit: smartcredit,
      });
      res
        .status(201)
        .json({ meassage: "Document created successfully", newDocs });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//GET ALL POSTS
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

//GET SPECIFIC POSTS
router.get("/:email", async (req, res) => {
  try {
    const doc = await Documents.findOne({ where: { email: req.params.email } });
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE POST
router.put("/:email", async (req, res) => {
  const email = req.params.email;
  const doc = await Documents.findOne({ where: { email: req.params.email } });
  if (email === doc.email) {
    try {
      const updatedDoc = await doc.update(req.body);
      res.status(200).json(updatedDoc);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("Unauthorized!");
  }
});

// DELETE Doc
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
