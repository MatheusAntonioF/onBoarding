import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const userRoutes = Router();

const userController = new UsersController();

userRoutes.post('/', userController.create);

export default userRoutes;
