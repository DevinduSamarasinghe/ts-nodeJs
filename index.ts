import express,{Express} from "express";
import { connectDb } from "./configurations/connectDb";

const app:Express = express();  //Types figure out easily
app.use(express.json());

//connecting to db\
connectDb();

//Route configuration


app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});