import mongoose from "mongoose";
import validator from "validator";
const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "Please enter your Id"]
    },
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Please enter your email"],
        ValidityState: validator
    },
    photo: {
        type: String,
        required: [true, "Please add your Photo"]
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "Please enter your gender"],
    },
    dob: {
        type: Date,
        required: [true, "Please enter your Date of birth"],
    },
}, {
    timestamps: true,
});
export const user = mongoose.model('User', schema);
