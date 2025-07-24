import mangoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mangoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    }catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw err;
        process.exit(1);
    }
}

export default connectDB;