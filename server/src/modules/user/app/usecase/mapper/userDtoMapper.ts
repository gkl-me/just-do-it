import { User } from "../../../domain/entities/Entity";
import { LoginResponseDto } from "../dto/UserDto";

export class UserMapper{
    static toLoginResponseDto(user:User):LoginResponseDto{
        return {
            id:user.id,
            email:user.email,
            name:user.name,
        }
    }
}