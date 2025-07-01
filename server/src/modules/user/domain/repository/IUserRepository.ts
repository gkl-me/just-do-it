import { User } from "../entities/Entity";


export interface IUserRepository{
    findById:(id:string) => User|null;
    findByEmail:(email:string) => User|null;
}