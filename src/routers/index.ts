import Router from 'koa-router';

import oUser from './user';
import oActivity from './activity';

import { BodyHelper } from './../helpers';

let oBodyHelper = new BodyHelper();

let oRouter = new Router();

oRouter.use('/user', oUser.routes(), oUser.allowedMethods());
oRouter.use('/activity', oActivity.routes(), oActivity.allowedMethods());

oRouter.get('/', async (oCtx) => {
  let oBody = oBodyHelper.reponse('REQUEST_UNDEFINED_PATH');
  oCtx.response.body = oBody;
});

oRouter.post('/', async (oCtx) => {
  let oBody = oBodyHelper.reponse('REQUEST_UNDEFINED_PATH');
  oCtx.response.body = oBody;
});

oRouter.put('/', async (oCtx) => {
  let oBody = oBodyHelper.reponse('REQUEST_UNDEFINED_PATH');
  oCtx.response.body = oBody;
});

oRouter.delete('/', async (oCtx) => {
  let oBody = oBodyHelper.reponse('REQUEST_UNDEFINED_PATH');
  oCtx.response.body = oBody;
})

export default oRouter;