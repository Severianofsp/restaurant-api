import jwt from 'jsonwebtoken';
import {Request, Response} from 'express'
import userRepository from '../repository/userRepository'

class AuthController {
    async getToken(req:Request, res:Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ errors: ['Invalid Credentials'] });
    }

    const userFound = await userRepository.findOneBy({email});

    if(!userFound){
       return res.status(404).json({ errors: ['Invalid Credentials'] })
    }

    const { TOKEN_SECRET}= process.env

    try{
    const token = jwt.sign({ email: userFound.email, document: userFound.document }, TOKEN_SECRET as string);
    console.log('test')
    return res.json({ token });
    }catch(error){
       return res.status(404).json(error);
    }

  }
}


export default new AuthController();
