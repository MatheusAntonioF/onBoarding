import { Router } from 'express';

import userRoutes from './user.routes';
import profileRoutes from './profile.routes';
import techsRoutes from './tech.routes';
import sessionRoutes from './session.routes';

const routes = Router();

routes.use('/session', sessionRoutes);
routes.use('/users', userRoutes);
routes.use('/profile', profileRoutes);
routes.use('/tech', techsRoutes);

export default routes;
