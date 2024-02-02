import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { newProduct,getlatestProducts, getAllCategories, getAdminProducts,
     getSingleProduct, updateProduct, deleteProduct, getAllProducts } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const app=express.Router();

// newProduct ~ /api/v1/product/new
app.post('/new',adminOnly,singleUpload,newProduct);

// latest Products ~ /api/v1/product/latest
app.get('/latest',getlatestProducts);

// Searching in Products ~ /api/v1/product/search
app.get('/all',getAllProducts);

// latest Categories ~ /api/v1/product/categories
app.get('/categories',getAllCategories);

// Admin-latest Categories ~ /api/v1/product/admin-latest
app.get('/admin-latest',getAdminProducts);

// get , update and delete the products ~ /api/v1/product/admin-latest/:id
app.route("/:id").get(getSingleProduct)
.put(adminOnly,singleUpload,updateProduct)
.delete(adminOnly,deleteProduct);



export default app;