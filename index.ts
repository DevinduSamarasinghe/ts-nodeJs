import express,{Express, Request, Response} from "express";

const app:Express = express();  //Types figure out easily

app.use(express.json());


app.get('/',(req:Request,res:Response)=>{
    res.send("Hello from Express + Ts and Nodemon Implemented and voila");
});

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});