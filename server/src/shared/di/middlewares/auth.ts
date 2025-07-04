import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { IToken } from "../../../modules/user/app/providers/interface/IToken";


export const auth = (req:Request,res:Response,next:NextFunction) => {
    try {
        const {token} = req.cookies
        const tokenProvider = container.resolve<IToken>('Jwt')
        const user = tokenProvider.verifyToken(token)
        if(user){
            req.user = user.userId
        }else{
            throw new Error("Invalid token")
        }
        next()
    } catch (error) {
        throw new Error("Unauthorized access")
    }
}