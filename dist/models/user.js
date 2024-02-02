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
        // ValidityState: validator.default.isEmail,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: "Please enter a valid email address",
        },
    },
    // password: {
    //     type: String,
    //     required: [true, "Please enter your password"],
    //     validate: {
    //       validator: (value:any) => {
    //         // Use validator functions for password validation
    //         // Example: Password must have at least 8 characters, including at least one uppercase letter and one number
    //         return validator.isLength(value, { min: 8 }) &&
    //                validator.matches(value, /^(?=.*\d)(?=.*[A-Z])/);
    //       },
    //       message: "Password must be at least 8 characters long and include at least one uppercase letter and one number",
    //     },
    //   },
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
schema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() || (today.getMonth() < dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
});
export const User = mongoose.model('User', schema);
// import mongoose from "mongoose";
// import validator from "validator";
// const schema = new mongoose.Schema({
//   _id: {
//     type: String,
//     required: [true, "Please enter your Id"]
//   },
//   name: {
//     type: String,
//     required: [true, "Please enter your name"]
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: [true, "Please enter your email"],
//     validate: {
//       validator: (value) => validator.isEmail(value),
//       message: "Please enter a valid email address",
//     },
//   },
//   photo: {
//     type: String,
//     required: [true, "Please add your Photo"]
//   },
//   role: {
//     type: String,
//     enum: ["admin", "user"],
//     default: "user"
//   },
//   gender: {
//     type: String,
//     enum: ["male", "female"],
//     required: [true, "Please enter your gender"],
//   },
//   dob: {
//     type: Date,
//     required: [true, "Please enter your Date of birth"],
//   },
// }, {
//   timestamps: true,
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true },
// });
// // Define a virtual attribute 'age' directly in the schema
// schema.virtual("age").get(function (this: any) {
//   const today = new Date();
//   const dob = this.dob;
//   let age = today.getFullYear() - dob.getFullYear();
//   if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
//     age--;
//   }
//   return age;
// });
// const User = mongoose.model('User', schema);
// export { User };
