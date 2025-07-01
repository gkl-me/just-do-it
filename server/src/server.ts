import 'reflect-metadata'
import express, { NextFunction, Request, Response } from "express"
import {createServer} from 'http'
import { createUserRoutes } from './modules/user/interface/routes/authRoutes'
import { registerUserModule } from './modules/user'

const app = express()
const server = createServer(app)

//modules calling
registerUserModule()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',createUserRoutes())

app.use((err:Error,req:Request,res:Response,next:NextFunction) => {
    if(err){
        res.status(500).json({
            status:false,
            message:err.message
        })
    }else{
        next()
    }
    })

    app.use((req:Request,res:Response) => {
        res.status(404).json({
            status:false,
            message:"route not found"
        })
    })

server.listen(3000,() => {
    console.log(`server running in http://localhost:3000`)
})