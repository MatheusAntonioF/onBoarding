import { Router } from 'express';

import ProfileController from '../controllers/ProfilesController';

const profileRoutes = Router();

const profileController = new ProfileController();

profileRoutes.post('/:user_id', profileController.create);

export default profileRoutes;
