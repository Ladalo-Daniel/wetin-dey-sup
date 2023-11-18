import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: String,
    image: String,
  },
  { timestamps: true }
);

const ProviderUser =
  mongoose.models.ProviderUser || mongoose.model("ProviderUser", userSchema);

export default ProviderUser;
