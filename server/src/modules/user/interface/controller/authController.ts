import { Request, Response } from "express";
import { IAuthUseCase } from "../../app/usecase/interface/IAuthUseCase";
import { inject, injectable } from "tsyringe";
import { IToken } from "../../app/providers/interface/IToken";


@injectable()
export class AuthController{
    constructor(
        @inject('AuthUseCase') private authUseCase:IAuthUseCase,
        @inject('Jwt') private tokenProvider:IToken
    ){}

    login(req:Request,res:Response){
        try {
            const loginData = req.body
            const user = this.authUseCase.login(loginData)

            const token = this.tokenProvider.generateToken(user.id)

            res.cookie('token',token,{
                httpOnly:true,
                sameSite:true,
                secure:false,
                maxAge: 15 * 60 * 1000 
            })

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