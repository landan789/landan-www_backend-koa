import Router from 'koa-router';

let user:any = new Router();

user.get('/', async ( ctx )=>{
  ctx.body = 'GET user!'
}).post('/', async ( ctx )=>{
  ctx.body = 'POST user!'
}).put('/', async ( ctx )=>{
  ctx.body = 'PUT user!'
}).delete('/', async ( ctx )=>{
  ctx.body = 'DELETE user!'
});

export default user;