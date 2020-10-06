import { Router } from 'express';

import ProfileController from '../controllers/ProfilesController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRoutes = Router();

const profileController = new ProfileController();

profileRoutes.use(ensureAuthenticated);

profileRoutes.get('/:user_id', profileController.show);
profileRoutes.post('/:user_id', profileController.create);

export default profileRoutes;
