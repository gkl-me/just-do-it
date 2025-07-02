import { User } from "../../../domain/entities/Entity"

export interface LoginUserDto{
    email:string,
    password:string
}

export interface SearchUserDto{
    email:string
}

export type SearchUseResponseDto = Omit<User,'password'>
export type LoginResponseDto  = Omit<User,'password'>