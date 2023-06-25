import mongoose  from "mongoose"

export interface UserDocument {
    
    firstName: string,
    lastName: string,
    role: string,
    email: string,
    password: string,
    pic: string,
}