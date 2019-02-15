import Router from 'koa-router';
import oUser from './user';
import oActivity from './activity';


let oRouter = new Router();

oRouter.use('/user', oUser.routes(), oUser.allowedMethods());
oRouter.use('/activity', oActivity.routes(), oActivity.allowedMethods());

export default oRouter;