const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => {
      console.log("Mongodb connected successfully");
    })
    .catch((err) => {
      console.error(err.message);
    });
};
module.exports = connectDB;
