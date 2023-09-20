import mongoose from "mongoose";
//  we can use validators here
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, validateBeforeSave: true }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
