import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fname: { type: String, required: true, trim: true },
  lname: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
