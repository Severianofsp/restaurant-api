import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export interface CustomRequest extends Request {
    user: { email: string; document: string };
}

export interface JwtPayload {
    email: string;
    document: string;
}

class Validate {
    auth(req: Request, res: Response, next: NextFunction) {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ error: 'Invalid Token' });
        }
        const { TOKEN_SECRET } = process.env;

        const decoded = jwt.verify(token, TOKEN_SECRET as string) as JwtPayload;

        const { document, email } = decoded;

        (req as CustomRequest).user = { document, email };

        next();
    }
}

export default new Validate();
