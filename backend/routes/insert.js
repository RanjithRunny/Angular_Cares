const express = require("express");
const router = express.Router();
const InsertModel = require("../models/insertModel"); // see below

router.post("/insert", async (req, res) => {
  setTimeout(async () => {
    try {
      const newItem = new InsertModel(req.body);
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }, 2000);
});

module.exports = router;
