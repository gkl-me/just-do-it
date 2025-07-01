import { injectable } from "tsyringe";
import { IToken } from "../../app/providers/interface/IToken";
import jwt from 'jsonwebtoken'


@injectable()
export class Jwt implements IToken{
    generateToken(userId:number){
        const token =  jwt.sign({userId},"demo")
        return token
    }

    verifyToken(token:string){
        return jwt.verify(token,"demo") as {userId:number}
    }
}

