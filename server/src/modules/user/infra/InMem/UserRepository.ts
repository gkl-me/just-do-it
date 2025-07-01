import { injectable } from "tsyringe";
import { User } from "../../domain/entities/Entity";
import { IUserRepository } from "../../domain/repository/IUserRepository";

@injectable()
export class UserRepository implements IUserRepository{
    public users:User[] = []

    findById(id: string) {
        let user =  this.users.find((user) => user.id == id) 
        if(user) return user
        else return null
    }

    findByEmail(email: string){
        let user = this.users.find(user => user.email == email)
        if(user) return user
        else return null
    }
}