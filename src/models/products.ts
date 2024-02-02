import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    photo: {
        type: String,
        required: [true, "Please add your photo"]
    },
    price: {
        type: String,
        required: [true, "Please enter the name of the product"]
    },
    stock: {
        type: String,
        required: [true, "Please enter the stock of the product"]
    },
    category: {
        type: String,
        required: [true, "Please enter the categoty of the product"],
        trim:true,
    },
}, {
    timestamps: true,
});

export const Product = mongoose.model('Product', schema);