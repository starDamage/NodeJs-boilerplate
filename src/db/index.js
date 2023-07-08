import mongoose from "mongoose";

let DB_URL = process.env.DATABASE_URL;
export const mongoDBConnection = async () => {
  return await mongoose.connect(DB_URL, { retryWrites: true, w: "majority" });
};

export default mongoose;
