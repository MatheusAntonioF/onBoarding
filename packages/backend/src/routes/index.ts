import { Router } from 'express';

import userRoutes from './user.routes';
import profileRoutes from './profile.routes';
import techsRoutes from './tech.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/profile', profileRoutes);
routes.use('/tech', techsRoutes);

export default routes;
