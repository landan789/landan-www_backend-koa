import Router from 'koa-router';
import oUser from './user';
import oActivity from './activity';

import { ROUTER, PATHS } from './../configs';

let oRouter =  new Router({
    prefix: ROUTER.PREFIX
});


oRouter.use(PATHS.USER, oUser.routes(), oUser.allowedMethods());
oRouter.use(PATHS.ACTIVITY, oActivity.routes(), oActivity.allowedMethods());

export default oRouter;