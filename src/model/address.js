import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  address1: { type: String, required: true },
  address2: { type: String },
  pin_code: { type: String, required: true },
  country: { type: String, required: true },
});

const addressModel = mongoose.model("address", addressSchema);

export default addressModel;
