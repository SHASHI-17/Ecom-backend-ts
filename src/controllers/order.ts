import { Request } from "express";
import { TryCatch } from "../middlewares/error.js";
import { NewOrderRequestBody } from "../types/types.js";
import { Order } from "../models/order.js";
import { invalidatesCache, reduceStock } from "../utils/features.js";
import ErrorHandler from "../utils/utility-class.js";

export const newOrder = TryCatch(async (req: Request<{}, {}, NewOrderRequestBody>, res, next) => {
    const { shippingInfo, orderItems, user, subtotal, tax, shippingCharges, discount, total } = req.body;

    if (!shippingInfo || !orderItems || !user || !subtotal || !tax || !total){
        return next(new ErrorHandler("Please Enter All feilds",400));
    }

        await Order.create({ shippingInfo, orderItems, user, subtotal, tax, shippingCharges, discount, total });
    await reduceStock(orderItems);

    await invalidatesCache({ product: true, order: true, admin: true });

    return res.status(201).json({
        success: true,
        message: "Order Placed Successfully",
    })
})