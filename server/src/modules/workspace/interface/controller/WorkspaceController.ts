import { inject, injectable } from "tsyringe";
import { ICreateUseCase } from "../../app/usecase/interface/ICreateUseCase";
import { Request, Response } from "express";



@injectable()
export class WorkspaceController{
    constructor(
        @inject('CreateUseCase') private CreateUseCase:ICreateUseCase
    ){}

    createWorkspace(req:Request,res:Response){
        const userId = req.user
        const {name} = req.body

        const workspaceCreated = this.CreateUseCase.createWorkspace({userId,name})

        res.status(200).json({
            success:true,
            workspace:workspaceCreated
        })
    }
}