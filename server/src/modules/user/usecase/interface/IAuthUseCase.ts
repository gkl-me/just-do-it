import { LoginResponseDto, LoginUserDto } from "../dto/UserDto";

export interface IAuthUseCase{
    login:(loginData:LoginUserDto) => LoginResponseDto
}