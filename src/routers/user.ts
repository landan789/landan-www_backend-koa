import Router from 'koa-router';
import UserController from './../controllers/user';

let oUserRouter = new Router();
let oUserController = new UserController();

oUserRouter.get('/', oUserController.getOne );
oUserRouter.post('/', oUserController.postOne);
oUserRouter.put('/', oUserController.putOne);
oUserRouter.delete('/', oUserController.deleteOne);

export default oUserRouter;