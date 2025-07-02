import { inject, injectable } from "tsyringe";
import { ICreateUseCase } from "../interface/ICreateUseCase";
import { IWorkspaceRespository } from "../../../domain/repository/IWorkspaceRespository";
import { createWorkspaceDto, CreateWorkspaceResponseDto } from "../dto/WorkspaceDto";
import { WorkspaceMapper } from "../mapper/workspaceDtoMapper";


@injectable()
export class CreateUseCase implements ICreateUseCase{
    constructor(
        @inject('WorkspaceRepository') public workspaceRepository:IWorkspaceRespository
    ){}

    createWorkspace(createWorkspaceData: createWorkspaceDto){

        const {name,userId} = createWorkspaceData

        const workspace = this.workspaceRepository.create(name)
        this.workspaceRepository.addUser(workspace.id,userId)

        return WorkspaceMapper.toCreateWorkspaceResponseDto(workspace)
    }
}