import Router from 'koa-router';

let oUser = new Router();

oUser.get('/', async ( ctx )=>{
  ctx.body = 'GET user!'
}).post('/', async ( ctx )=>{
  ctx.body = 'POST user!'
}).put('/', async ( ctx )=>{
  ctx.body = 'PUT user!'
}).delete('/', async ( ctx )=>{
  ctx.body = 'DELETE user!'
});

export default oUser;