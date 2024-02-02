import express from "express"
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
// importing routes 
import userRoute from "./routes/user.js"
import productRoute from "./routes/product.js"

// port and db connection
const PORT = 4000;
connectDB();

export const myCache =  new NodeCache();

// body parser ,default middleware and server intiation
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{  //  testing route
    res.send("API Working with /api/v1");
});

//using routes
app.use('/api/v1/user',userRoute); //user route
app.use('/api/v1/product',productRoute); //user route

app.use('/uploads',express.static("uploads"));
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`express is Working on http://localhost:${PORT}`);

})