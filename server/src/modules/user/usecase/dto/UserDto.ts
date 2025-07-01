import { User } from "../../domain/entities/Entity"

export interface LoginUserDto{
    email:string,
    password:string
}

export type LoginResponseDto  = Omit<User,'password'>