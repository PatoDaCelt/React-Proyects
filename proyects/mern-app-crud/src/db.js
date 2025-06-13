//Conexión con base de datos MongoDB
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/first-mern-app-db");
        console.log(">>> DB is connected <<<")
    } catch (error) {
        console.log(error);
    }
};