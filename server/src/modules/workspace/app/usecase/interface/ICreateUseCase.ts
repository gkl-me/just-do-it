import { createWorkspaceDto, CreateWorkspaceResponseDto } from "../dto/WorkspaceDto";


export interface ICreateUseCase{
    createWorkspace:(createWorkspaceData:createWorkspaceDto) => CreateWorkspaceResponseDto 
}