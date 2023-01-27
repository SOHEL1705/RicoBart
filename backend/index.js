import express from "express";
import cors from 'cors'
import connectToMongo from "./DataBase.js";
import bodyParser from 'body-parser'
import Routes from "./Routes/route.js";



const app=express()
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use("/",Routes) 
// app.use("/api/TODO_AUTH",Routes) 


const PORT = 8000;
connectToMongo()
const printport =()=>{
    return(
        console.log(`connected with localhost ${PORT}`)      
        )
    }
app.listen(PORT,printport)