import { Router } from 'express';

import ProfileController from '../controllers/ProfilesController';

const profileRoutes = Router();

const profileController = new ProfileController();

profileRoutes.get('/:user_id', profileController.show);
profileRoutes.post('/:user_id', profileController.create);

export default profileRoutes;
