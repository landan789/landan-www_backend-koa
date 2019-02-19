import Router from 'koa-router';

import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';



import oUser from './user';
import oActivity from './activity';

import { ROUTER, PATHS } from './../configs';

let oRouter =  new Router({
    prefix: ROUTER.PREFIX
});

oRouter.get('/graphiql', async (ctx, next) => {
  await graphiqlKoa({endpointURL: '/graphql'})(ctx)
})

oRouter.use(PATHS.USER, oUser.routes(), oUser.allowedMethods());
oRouter.use(PATHS.ACTIVITY, oActivity.routes(), oActivity.allowedMethods());

export default oRouter;