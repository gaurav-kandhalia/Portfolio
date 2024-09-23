import { DB_NAME } from "../constant.js"
import mongoose, { connect } from "mongoose"
const connectDB = async()=>{
  try {
     const db = `${process.env.MONGODB_URI}/${DB_NAME}`
     const connectionInstance = await mongoose.connect(`${db}`);
     
     console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

  } catch (error) {
    console.log("MONGODB connection FAILED",error.message);
    process.exit(1);
  }
   
}

export default connectDB;