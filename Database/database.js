const mongoose = require("mongoose");
const Db = process.env.DB_URL;

const connectDatabase = () =>{
    mongoose
      .connect(Db, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((data) => {
        console.log(`Connected with database : ${data.connection.host}`);
      });
}

module.exports = connectDatabase;