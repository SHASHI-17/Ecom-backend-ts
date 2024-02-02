import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility-class.js";

export const newUser = TryCatch(
    async (req: Request<{}, {}, NewUserRequestBody>, res: Response, next: NextFunction) => {
        const { name, email, role, gender, _id, photo, dob } = req.body;

        let user = await User.findById(_id);

        if (user) return res.status(200).json({
            success: true,
            message: `Welcome ,${user.name}`,
        });

        if(!name|| !email|| !role ||!gender||! _id|| !photo||! dob){
                return next(new ErrorHandler("Please add all details",400));
        }

        user = await User.create({
            name, email, role, gender, _id, photo, dob: new Date(dob)
        });

        return res.status(200).json({
            success: true,
            message: `Welcome ,${user.name}`
        })
    }
)