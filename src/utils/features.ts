import mongoose from "mongoose"

export const connectDB=()=>{
    mongoose.connect("mongodb+srv://shashi:J6MDngFthzL8tTAN@cluster0.ere7qg5.mongodb.net/",{
        dbName:'Ecommerce_24'
    }).then(c=>console.log(`DB Connected to ${c.connection.host}`))
    .catch(e=>console.log(e.message)
    );
}