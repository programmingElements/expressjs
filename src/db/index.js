import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const DB_URI = "mongodb+srv://youtubeuser:youtubeuser1234@cluster0.vsme0vp.mongodb.net"
        const connectionInstance = await mongoose.connect(`${DB_URI}/${DB_NAME}`)

        console.log(`\n MongoDB connected ! DB host: ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MongoDB Connection error ", error)
        process.exit(1)
    }
}

export default connectDB