const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Details = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { collection: "details" }
);

module.exports = mongoose.model("details", Details);
