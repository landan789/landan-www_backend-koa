import Router from 'koa-router';
import userController from './../controllers/user';

let oUserRouter = new Router();

oUserRouter.get('/', async ( ctx )=>{
  userController.get(ctx);
}).post('/', async ( ctx )=>{
  userController.post(ctx);
}).put('/', async ( ctx )=>{
  userController.put(ctx);
}).delete('/', async ( ctx )=>{
  userController.delete(ctx);
});

export default oUserRouter;