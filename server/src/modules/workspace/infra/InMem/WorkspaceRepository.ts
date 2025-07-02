import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../user/domain/repository/IUserRepository";
import { WorkSpace } from "../../domain/entities/Workspace";
import { IWorkspaceRespository } from "../../domain/repository/IWorkspaceRespository";

@injectable()
export class WorkspaceRepository implements IWorkspaceRespository{
    constructor(
        @inject('UserRepository') public userRepository:IUserRepository
    ){}

    public Workspace:WorkSpace[] = []
    public index = 0

    create(name:string){
        let workspace = {
            id:this.index++,
            name,
            user:[]
        }
        this.Workspace.push(workspace)
        return workspace
    }

    addUser(workSpaceId:number,userId:number){
        let user = this.userRepository.findById(userId)
        if(!user){
            throw new Error("User not found")
        }
        let workspace = this.Workspace.find((ele) => ele.id == workSpaceId)
        if(!workspace){
            throw new Error("Workspace not found")
        }
        workspace?.user.push(user)
        return workspace
    }
}