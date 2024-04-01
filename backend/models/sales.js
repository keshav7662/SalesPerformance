import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
      },
      product: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      unitPrice: {
        type: Number,
        required: true
      },
      totalAmount: {
        type: Number,
        required: true
      },
      customer: {
        type: String,
        required: true
      },
      salesperson: {
        type: String,
        required: true
      },
});

export default mongoose.model('Sale', salesSchema)