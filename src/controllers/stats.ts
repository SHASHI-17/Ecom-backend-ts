import { myCache } from "../app.js";
import { TryCatch } from "../middlewares/error.js";
import { Product } from "../models/products.js";

export const getDashboardStats = TryCatch(async (req,res,next)=>{
    let stats

    if(myCache.has("admin-stats")){
        stats=JSON.parse(myCache.get("admin-stats")as string);
    }else{
        const today= new Date();
        console.log(today);
        const startOfThisMonth=new Date(today.getFullYear(),today.getMonth(),1);
        console.log(startOfThisMonth);
        const startOfLastMonth=new Date(today.getFullYear(),today.getMonth()-1,1);
        console.log(startOfLastMonth);

        const endOfLastMonth=new Date(today.getFullYear(),today.getMonth(),0);
        console.log(endOfLastMonth);
        
        
        const thisMonthProducts=await Product.find({
            createdAt:{
                $gte:startOfThisMonth,$lte:today
            }
        })

    }
    return res.status(200).json({
        success:true,
        stats
    })
})
export const getPieCharts = TryCatch(async (req,res,next)=>{

})
export const getBarCharts = TryCatch(async (req,res,next)=>{

})
export const getLineCharts = TryCatch(async (req,res,next)=>{

})