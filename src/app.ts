import express, { NextFunction, Request, Response } from "express"


// importing routes 
import userRoutes from "./routes/user.js"
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
const PORT = 4000;
connectDB();

const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("API Working with /api/v1");
})
//using routes
app.use('/api/v1/user',userRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`express is Working on http://localhost:${PORT}`);

})