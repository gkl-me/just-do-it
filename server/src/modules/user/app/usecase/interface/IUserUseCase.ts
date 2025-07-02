import { SearchUserDto, SearchUseResponseDto } from "../dto/UserDto";


export interface IUserUseCase{
    searchUser:(searchUseData:SearchUserDto) => SearchUseResponseDto;
}