const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Login = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  { collection: "user-data" }
);

module.exports = mongoose.model('login', Login)