import Router from 'koa-router';
import oUser from './user';
import oActivity from './activity';

import { ROUTER } from './../configs';

let oRouter =  new Router({
    prefix: ROUTER.PREFIX
});


oRouter.use('/user', oUser.routes(), oUser.allowedMethods());
oRouter.use('/activity', oActivity.routes(), oActivity.allowedMethods());

export default oRouter;