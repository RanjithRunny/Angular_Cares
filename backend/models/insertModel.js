const mongoose = require("mongoose");

const InsertSchema = new mongoose.Schema({
  casetype: String,
  caseId: String,
  date: String,
});

module.exports = mongoose.model("Insert", InsertSchema);
