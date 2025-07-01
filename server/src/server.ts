import 'reflect-metadata'
import express, { NextFunction, Request, Response } from "express"
import {createServer} from 'http'
import { createUserRoutes } from './modules/user/interface/routes/authRoutes'
import { registerUserModule } from './modules/user'
import { errorHandler } from './shared/di/middlewares/errorHandler'
import { notFound } from './shared/di/middlewares/notFound'

const app = express()
const server = createServer(app)

//modules calling
registerUserModule()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',createUserRoutes())

app.use(errorHandler)
app.use(notFound)

server.listen(3000,() => {
    console.log(`server running in http://localhost:3000`)
})