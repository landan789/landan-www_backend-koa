import Router from 'koa-router';

let oActivity = new Router();

oActivity.get('/', async ( ctx )=>{
  ctx.body = 'GET activity!'
}).post('/', async ( ctx )=>{
  ctx.body = 'POST activity!'
}).put('/', async ( ctx )=>{
  ctx.body = 'PUT activity!'
}).delete('/', async ( ctx )=>{
  ctx.body = 'DELETE activity!'
});

export default oActivity;