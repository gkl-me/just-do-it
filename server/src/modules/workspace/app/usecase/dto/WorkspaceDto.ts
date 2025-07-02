import { UserSummary } from "../../../../../shared/di/types/UserSummary"

export interface createWorkspaceDto{
    name:string
    userId:number
}

export interface CreateWorkspaceResponseDto{
    id:number,
    name:string
    user:UserSummary[]
}