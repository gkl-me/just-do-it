import { injectable } from "tsyringe";
import { User } from "../../domain/entities/Entity";
import { IUserRepository } from "../../domain/repository/IUserRepository";

@injectable()
export class UserRepository implements IUserRepository{
    public users:User[] = [{
        id:1,
        name:'Gokul',
        email:"gkl@gmail.com",
        password:"12345"
    },{
        id:2,
        name:"gkl",
        email:"demo@gmail.com",
        password:"1234"
    }]

    findById(id: number) {
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