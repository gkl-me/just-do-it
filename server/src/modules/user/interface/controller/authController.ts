import { Request, Response } from "express";
import { IAuthUseCase } from "../../usecase/interface/IAuthUseCase";
import { inject, injectable } from "tsyringe";


@injectable()
export class AuthController{
    constructor(
        @inject('AuthUseCase') private authUseCase:IAuthUseCase
    ){}

    login(req:Request,res:Response){
        try {
            const loginData = req.body
            const user = this.authUseCase.login(loginData)
            res.status(200).json({
                success:true,
                user
            })
        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            }
            throw new Error("Failed to login")
        }
    }
}