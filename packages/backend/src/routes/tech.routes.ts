import { Router } from 'express';

import TechController from '../controllers/TechsController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const techRoutes = Router();

const techController = new TechController();

techRoutes.use(ensureAuthenticated);

techRoutes.get('/', techController.list);
techRoutes.post('/', techController.create);
techRoutes.delete('/:id', techController.delete);

export default techRoutes;
