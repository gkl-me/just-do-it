import { container } from "tsyringe"
import { UserRepository } from "./infra/InMem/UserRepository"
import { IUserRepository } from "./domain/repository/IUserRepository"
import { IAuthUseCase } from "./app/usecase/interface/IAuthUseCase"
import { AuthUseCase } from "./app/usecase/usecase/AuthUseCase"
import { AuthController } from "./interface/controller/authController"
import { IToken } from "./app/providers/interface/IToken"
import { Jwt } from "./infra/providers/Jwt"

export const registerUserModule = () => {
    //register user repo

    container.register<IUserRepository>('UserRepository',{
        useClass:UserRepository
    })

    container.register<IAuthUseCase>('AuthUseCase',{
        useClass:AuthUseCase
    })
    
    container.register<AuthController>('AuthController',{
        useClass:AuthController
    })

    container.register<IToken>('Jwt',{
        useClass:Jwt
    })

}