declare global {
    namespace Express {
        interface Request {
            user:number
        }
    }
}

export {}