import { User } from "../../../domain/entities/Entity";
import { LoginResponseDto, SearchUseResponseDto } from "../dto/UserDto";

export class UserMapper{
    static toLoginResponseDto(user:User):LoginResponseDto{
        return {
            id:user.id,
            email:user.email,
            name:user.name,
        }
    }

    static toUseResponseDto(user:User):SearchUseResponseDto{
        return {
            id:user.id,
            name:user.name,
            email:user.email
        }
    }
}