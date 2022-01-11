const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema(
  {
    superHero: {
      type: String,
      required: [true, "Please fill this field"],
      unique: true,
      trim: true,
    },
    realName: {
      type: String,
      required: true,
      maxlength: [200, "Max 200 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Hero || mongoose.model("Hero", heroSchema);
