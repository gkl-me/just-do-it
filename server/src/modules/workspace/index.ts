import { container } from "tsyringe"
import { IWorkspaceRespository } from "./domain/repository/IWorkspaceRespository"
import { WorkspaceRepository } from "./infra/InMem/WorkspaceRepository"
import { ICreateUseCase } from "./app/usecase/interface/ICreateUseCase"
import { CreateUseCase } from "./app/usecase/usecase/CreateUseCase"
import { WorkspaceController } from "./interface/controller/WorkspaceController"



export const registerWorkspaceModule = () => {

    container.register<IWorkspaceRespository>('WorkspaceRepository',{
        useClass:WorkspaceRepository
    })

    container.register<ICreateUseCase>('CreateUseCase',{
        useClass:CreateUseCase
    })

    container.register<WorkspaceController>('WorkspaceController',{
        useClass:WorkspaceController
    })

}