import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv/config';
import { connectDB } from './config/db';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 8050;

//routes for the application

//establishing the connection to the database
connectDB();
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
