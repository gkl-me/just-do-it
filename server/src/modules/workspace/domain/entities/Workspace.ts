import { UserSummary } from "../../../../shared/di/types/UserSummary";

export interface WorkSpace {
    id:number,
    name:string,
    user:UserSummary[]
}