import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  image: {
    type: String,
  },
  date: { type: Date, default: Date.now },
}, {timestamps: true}
);

const User = mongoose.model("User", userSchema);
export default User;
