import Router from 'koa-router';
import oUserController from './../controllers/user';

let oUserRouter = new Router();

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