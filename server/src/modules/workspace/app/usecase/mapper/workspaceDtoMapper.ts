import { WorkSpace } from "../../../domain/entities/Workspace";
import { CreateWorkspaceResponseDto } from "../dto/WorkspaceDto";




export class WorkspaceMapper{
    static toCreateWorkspaceResponseDto(workspace:WorkSpace): CreateWorkspaceResponseDto{
        return {
            id:workspace.id,
            name:workspace.name,
            user:workspace.user
        }
    }
}