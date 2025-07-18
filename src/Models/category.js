import mongoose, {Schema} from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    enum: {
      values: [
        "COOLER",
        "CYCLE",
        "MOBILE",
        "PC & LAPTOP",
        "STUDY",
        "SPORTS",
        "OTHER",
      ],
      message: '{VALUE} is not available'
    },
    required: true,
  },
  products: [{
    type: mongoose.Types.ObjectId,
    ref: "product"
  }],
});

const category = mongoose.models.category || mongoose.model("category", categorySchema);

export default category;