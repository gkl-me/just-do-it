import { NextFunction, Request, Response } from "express"

export function errorHandler(err:Error,req:Request,res:Response,next:NextFunction){
    if(err){
        res.status(500).json({
            status:false,
            message:err.message
        })
    }else{
        next()
    }
    }