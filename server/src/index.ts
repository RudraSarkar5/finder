import express from "express";
import { env_variable } from "./config";

const app = express();

const PORT = env_variable.PORT;

app.listen(PORT,()=>{
    console.log("server running successfully...");
})


