const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Todos = new Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: "todos" }
);

module.exports = mongoose.model("todos", Todos);
