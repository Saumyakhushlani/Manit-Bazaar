import mongoose, {Schema} from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "products"
  }],
});

const category = mongoose.models?.category || mongoose.model("category", categorySchema);

export default category;