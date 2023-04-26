const mongoose = require("mongoose");
require('dotenv').config()

const {USER_NAME, PASSWORD, CLUSTER_NAME} = process.env

module.exports = async () => {
  try {
    await mongoose
      .connect(
        `mongodb+srv://${USER_NAME}:${PASSWORD}@${CLUSTER_NAME}.2fxtysp.mongodb.net/?retryWrites=true&w=majority`
      )
      .then(() => console.log("db connected..."));
  } catch (error) {
    console.log(`db not connected ${error} `);
  }
};
