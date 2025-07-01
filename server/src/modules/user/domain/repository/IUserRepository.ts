import { User } from "../entities/Entity";


export interface IUserRepository{
    findById:(id:number) => User|null;
    findByEmail:(email:string) => User|null;
}