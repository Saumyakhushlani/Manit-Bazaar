import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price should be positive"],
    },
    categories: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    image: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const product =
  mongoose.models.product || mongoose.model("product", productSchema);

export default product;
