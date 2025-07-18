const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/authApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("✅ MongoDB connected"));
db.on("error", (err) => console.error("MongoDB error:", err));
