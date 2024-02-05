import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { allCoupons, applyDiscount, deleteCoupon, newCoupon } from "../controllers/payment.js";


const app = express.Router();

// api/v1/payment/discount
app.post('/discount', applyDiscount);

// api/v1/payment/coupon/new
app.post('/coupon/new',adminOnly, newCoupon);

// api/v1/payment/coupon/all
app.get('/coupon/all',adminOnly, allCoupons);

// api/v1/payment/coupon/all
app.delete('/coupon/:id',adminOnly, deleteCoupon);

export default app;