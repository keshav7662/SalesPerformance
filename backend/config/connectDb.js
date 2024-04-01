import mongoose from "mongoose";
export const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(process.env.DATABASE_URL);
        console.log('Database connected successfully!!...,', 'DB name:', connection.connection.name)
    } catch (error) {
        console.log(error);
    }
}
