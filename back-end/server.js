import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import MessageRoutes from "./routes/message.routes.js";
import { connect } from "http2";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";




const app = express();

const PORT  = process.env.PORT || 4000;
const __dirname = path.resolve();




dotenv.config({path:path.resolve(__dirname,'. ./.env')});

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/auth/messsages",MessageRoutes);
app.use("/api/auth/users",userRoutes);





// app.get("/",(req,res)=>{
//     res.send("hello!!!");
// })


app.listen(PORT,() =>{
    console.log(process.env.MONGO_DB_URI);
    connectToMongoDB();
    console.log(`server running on port  ${PORT}`);
});