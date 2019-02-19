import Router from 'koa-router';

import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';


import schema from '../graphql/schema';
import oUser from './user';
import oActivity from './activity';

import { ROUTER, PATHS } from './../configs';

let oRouter =  new Router({
    prefix: ROUTER.PREFIX
});

oRouter.post('/graphql', async (ctx:any, next:any) => {
  await graphqlKoa({schema: schema})(ctx, next) // 使用schema
})
.get('/graphql', async (ctx:any, next:any) => {
  await graphqlKoa({schema: schema})(ctx, next) // 使用schema
})
.get('/graphiql', async (ctx:any, next:any) => {
  await graphiqlKoa({endpointURL: '/graphql'})(ctx) // 重定向到graphiql路由
})

oRouter.use(PATHS.USER, oUser.routes(), oUser.allowedMethods());
oRouter.use(PATHS.ACTIVITY, oActivity.routes(), oActivity.allowedMethods());

export default oRouter;