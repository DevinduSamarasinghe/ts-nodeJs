import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path: './.env'});

const options = {   //passing the new URL parser and unified Topology to avoid deprecation warnings for current Server Discovery
    useNewUrlParser: true,
    useUnifiedTopology: true,   
}

export const connectDB = async()=>{
    try{
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MONGODBURL as string,options) //ideal method is to cast the string like this as well
        // useNewUrlParser true provides the new url parser, instead of the deprecated version
        const connection = mongoose.connection;

        connection.once('open', ()=>{
            console.log("TS-MongoDB connection established successfully");  //Get the proper database message later on with substring 
        })
    }catch(error:any | unknown){
        console.log(`Database error: ${error.message}`)
    }
}