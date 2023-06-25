import { Express, Request, Response } from "express-serve-static-core";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import mongoose ,{}from "mongoose";

//Importing Types
import { UserDocument } from "../types/types";

export const getAllUsers = async(req:Request,res:Response)=>{
    
    try{
        const body:UserDocument = req.body;

        if(!body.email || !body.password){
            return res.status(400).json({message: "Please enter all the fields"});
        }else{
            let user = await User.findOne({email: body.email});

            if(user){
                return res.status(400).json({message: "User already exists"});
            }

            //creating the user
            const {firstName, lastName, role, email, password, pic} = body;
            user = new User({
                firstName,
                lastName,
                role, 
                email,
                password,
                pic
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password,salt);
            await user.save();
            
        }
    }catch(err){
        res.status(500).json({message: err})
    }
}