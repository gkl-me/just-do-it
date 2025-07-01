import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../domain/repository/IUserRepository";
import { LoginUserDto, LoginResponseDto } from "../dto/UserDto";
import { IAuthUseCase } from "../interface/IAuthUseCase";
import { UserMapper } from "../mapper/userDtoMapper";
import { UserRepository } from "../../infra/InMem/UserRepository";

@injectable()
export class AuthUseCase implements IAuthUseCase{
    constructor(
        @inject(UserRepository) private userRepository:IUserRepository
    ){}

    login(loginData: LoginUserDto){
        const {email,password } = loginData

        let user = this.userRepository.findByEmail(email)
        if(!user){
            throw new Error("User not found")
        }

        if(user.password !== password){
            throw new Error("Password does not match")
        }

        return UserMapper.toLoginResponseDto(user)

    }
}