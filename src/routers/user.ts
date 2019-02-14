import Router from 'koa-router';
import UserController from './../controllers/user';

let oUserRouter = new Router();
let oUserController = new UserController();

oUserRouter.get('/', async ( ctx )=>{
  oUserController.get(ctx);
}).post('/', async ( ctx )=>{
  oUserController.post(ctx);
}).put('/', async ( ctx )=>{
  oUserController.put(ctx);
}).delete('/', async ( ctx )=>{
  oUserController.delete(ctx);
});

export default oUserRouter;