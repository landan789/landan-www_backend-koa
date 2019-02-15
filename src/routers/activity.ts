import Router from 'koa-router';

let oActivity = new Router();

oActivity.get('/', async ( oRes )=>{
  oRes.body = 'GET activity!'
}).post('/', async ( oRes )=>{
  oRes.body = 'POST activity!'
}).put('/', async ( oRes )=>{
  oRes.body = 'PUT activity!'
}).delete('/', async ( oRes )=>{
  oRes.body = 'DELETE activity!'
});

export default oActivity;