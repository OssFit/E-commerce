const mongoose = require("mongoose");

const ConnectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data: { connection: { host: any; }; }) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

module.exports = ConnectDatabase;