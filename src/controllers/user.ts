import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility-class.js";


// route ~ /api/v1/user/new
export const newUser = TryCatch(
    async (req: Request<{}, {}, NewUserRequestBody>, res: Response, next: NextFunction) => {
        const { name, email, gender, _id, photo, dob } = req.body;

        let user = await User.findById(_id);

        if (user) return res.status(200).json({
            success: true,
            message: `Welcome ,${user.name}`,
        });

        if (!name || !email || !gender || !_id || !photo || !dob) {
            return next(new ErrorHandler("Please add all details", 400));
        }

        user = await User.create({
            name, email, gender, _id, photo, dob: new Date(dob)
        });

        return res.status(200).json({
            success: true,
            message: `Welcome ,${user.name}`
        })
    }
)

// route ~ /api/v1/user/all
export const getAllUsers = TryCatch(async (req, res, next) => {
    const users = await User.find({});
    return res.status(201).json({
        success: true,
        users,
    })
});

// route ~ /api/v1/user/:id
export const getUser = TryCatch(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new ErrorHandler("Invalid Id", 400));
    }
    return res.status(201).json({
        success: true,
        user,
    })
});

// route ~ /api/v1/user/:id
export const deleteUser = TryCatch(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new ErrorHandler("Invalid Id", 400));
    }
    await user.deleteOne();
    return res.status(201).json({
        success: true,
        message:"User Deleted Successfully",
    })
});