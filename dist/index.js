"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectDb_1 = require("./configurations/connectDb");
const app = (0, express_1.default)(); //Types figure out easily
app.use(express_1.default.json());
//connecting to db\
(0, connectDb_1.connectDb)();
//Route configuration
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
