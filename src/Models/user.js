import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    products: [
      {
        type: mongoose.Types.ObjectId,
        ref: "product",
      },
    ],
    refreshToken: String,
    profilePhoto: String,
  },
  { timestamps: true }
);

userSchema.methods.generateRefreshToken = function () {
  const token = jwt.sign(
    { id: this._id, name: this.name },
    process.env.REFRESH_TOKEN_SECRET
  );

  

  return token;
};

const user = mongoose.models.user || mongoose.model("user", userSchema);

export default user;
