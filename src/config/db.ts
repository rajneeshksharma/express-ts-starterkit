import mongoose from "mongoose";
import { config } from '../config/config';
export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.mongo}`, { useNewUrlParser: true , useUnifiedTopology: true})
      .then(() => {
        return console.log(`Successfully connected to ${config.mongo}`);
      })
      .catch(error => {
        console.log("Error connecting to database: ", error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on("disconnected", connect);
};