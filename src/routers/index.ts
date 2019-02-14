import Router from 'koa-router';

import user from './user';
import activity from './activity';

let router = new Router();

router.use('/', user.routes());
router.use('/', activity.routes());