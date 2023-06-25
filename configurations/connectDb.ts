import mongoose,{ConnectOptions} from "mongoose";
import dotenv from "dotenv";
dotenv.config({path: './.env'});


export const connectDb = async()=>{

    try{
        mongoose.set("strictQuery",false);
        mongoose.connect(process.env.MONGODBURL as string);
        const connection = mongoose.connection;

        connection.once('open',()=>{
            console.log("MongoDb connection established successfully");
        })
    }catch(err: any | unknown){
        console.log(`Database error: ${err}`);
    }
}
