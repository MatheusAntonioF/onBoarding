import { Router } from 'express';

import TechController from '../controllers/TechsController';

const techRoutes = Router();

const techController = new TechController();

techRoutes.post('/', techController.create);
techRoutes.delete('/:id', techController.delete);

export default techRoutes;