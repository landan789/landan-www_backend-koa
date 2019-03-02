import Router from 'koa-router';
import { UserController } from './../../controllers/index';

let oUserRouter = new Router();
let oUserController = new UserController();

oUserRouter.get('/', oUserController.getShow);
oUserRouter.post('/', oUserController.postAdd);
oUserRouter.put('/', oUserController.putEdit);
oUserRouter.delete('/', oUserController.deleteRemove);

export default oUserRouter;