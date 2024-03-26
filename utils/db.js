import mongoose from "mongoose";
// import * as mongoose from 'mongoose';
import toast from "react-hot-toast";

const connectToDB = async () => {
    try {
        if (mongoose.connection?.readyState) {
            return false;
        }
        await mongoose.connect("mongodb://localhost:27017/todo");
        // return res.status(200).json({ message: "Connect To Db Successfully" });

    } catch (error) {
        return false
    }
}

export default connectToDB;