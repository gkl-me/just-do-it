
import express from 'express'
import { AuthController } from '../controller/authController'
import { container } from 'tsyringe'


export const createUserRoutes = () => {

    const authController = container.resolve<AuthController>('AuthController')

    const router = express.Router()
    router.post('/auth',(req,res) => authController.login(req,res))
    return router
}