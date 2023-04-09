import { Connection } from "mongoose";

const mongoose = require("mongoose");
interface ConnectionData {
  connection: {
    host: string;
  };
}

const ConnectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data:ConnectionData & Connection) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

module.exports = ConnectDatabase;