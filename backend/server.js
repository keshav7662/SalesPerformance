import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/connectDb.js";
connectDB();
import router from "./routes/salesRoutes.js";
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use('/api', router);

app.get('/', (req, res)=>{
    res.status(200).json({Sucess: true, message: "Server started successfully!..."})
});

app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
});
