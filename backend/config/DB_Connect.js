import mongoose from "mongoose";
const uri = "mongodb://127.0.0.1:27017/MERN-AUTH";

const DB_Connect = async () => {
  try {
    const { connection } = await mongoose.connect(uri, {});
    console.log("Established connection to the database...");
  } catch (e) {
    console.log(`Error connecting to Database..\nError: ${e.message}`);
  }
};

export default DB_Connect;
