
export interface IToken{

    generateToken:(userId:number) => string;
    verifyToken:(token:string) => {userId:number}

}