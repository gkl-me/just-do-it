import { WorkSpace } from "../entities/Workspace";

export interface IWorkspaceRespository{
    create:(name:string) => WorkSpace;
    addUser:(workSpaceId:number,useId:number) => WorkSpace;
}