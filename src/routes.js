import { Router } from 'express';
import UserController from './app/controllers/UserController';
import AnimalController from './app/controllers/AnimalController'
import AuthController from './app/controllers/AuthController'

import authMiddleware from './app/middleware/authMiddleware'
const routes = Router();


routes.post('/auth', AuthController.create);
routes.post('/users', UserController.create);

routes.use(authMiddleware);

routes.get('/users', UserController.list);
routes.get('/users/:id', UserController.get);
routes.put('/users', UserController.update);
routes.delete('/users/:id', UserController.delete);
routes.post('/animals', AnimalController.create);
routes.put('/animals', AnimalController.update);
routes.get('/animals', AnimalController.list);
routes.get('/animals/:id', AnimalController.get);
routes.delete('/animals/:id', AnimalController.delete);





export default routes;
