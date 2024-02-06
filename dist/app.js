import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
import { config } from "dotenv";
import morgan from 'morgan';
import Stripe from "stripe";
// importing routes 
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import orderRoute from "./routes/order.js";
import paymentRoute from "./routes/payment.js";
import dashboardRoute from "./routes/stats.js";
// port , calling env and db connection 
config({
    path: "./.env"
});
const PORT = process.env.PORT || 4000;
connectDB(process.env.MONGO_URI);
export const myCache = new NodeCache();
export const stripe = new Stripe(process.env.STRIPE_KEY || "");
// body parser ,default middleware and server intiation
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.get('/', (req, res) => {
    res.send("API Working with /api/v1");
});
//using routes
app.use('/api/v1/user', userRoute); //user route
app.use('/api/v1/product', productRoute); //product route
app.use('/api/v1/order', orderRoute); //order route
app.use('/api/v1/payment', paymentRoute); //payment route
app.use('/api/v1/dashboard', dashboardRoute); //stats route
app.use('/uploads', express.static("uploads"));
app.use(errorMiddleware);
app.listen(PORT, () => {
    console.log(`Express is Working Successfully on http://localhost:${PORT}`);
});
