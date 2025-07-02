import { container } from "tsyringe";
import { WorkspaceController } from "../controller/WorkspaceController";
import express from 'express'
import { auth } from "../../../../shared/di/middlewares/auth";

export function createWorkspaceRoutes(){
    const workspaceController = container.resolve<WorkspaceController>('WorkspaceController')

    const router = express.Router()
    router.post('/createWorkspace',auth,(req,res) => workspaceController.createWorkspace(req,res))
    return router
}