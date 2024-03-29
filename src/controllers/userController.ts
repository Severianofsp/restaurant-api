import { Request, Response } from 'express';
import userRepository from '../repository/userRepository';
import { CustomRequest } from '../middlewares/validate';
import { QueryFailedError } from 'typeorm';

class UserController {
    async register(req: Request, res: Response) {
        try {
            const newUser = userRepository.create(req.body);
            console.log(newUser);
            await userRepository.save(newUser);

            return res
                .status(201)
                .json({ message: 'User Created', date: new Date() });
        } catch (e) {
            if (e instanceof QueryFailedError) {
                return res.status(400).json({ message: e.driverError.message });
            }
        }
    }

    async findAll(req: Request, res: Response) {
        const allUser = await userRepository.find();
        return res.json(allUser);
    }

    async findById(req: Request, res: Response) {
        const user = (req as CustomRequest).user;

        const userFound = await userRepository.findOneBy({
            id: user.id
        });

        return res.json(userFound);
    }

    async updateUser(req: Request, res: Response) {
        try {
            const { email } = (req as CustomRequest).user;

            const userFound = await userRepository.findOneBy({ email });

            if (!userFound) {
                return res.status(404).json({ message: 'User not found' });
            }

            userFound.name = req.body.name;
            userFound.document = req.body.document;

            await userRepository.save(userFound);
            return res.status(204).json();
        } catch (e) {
            return res.status(404).json({ message: e });
        }
    }
}
export default new UserController();
