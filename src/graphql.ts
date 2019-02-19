import koa from 'koa'; // koa@2
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa } from 'apollo-server-koa';

const app = new koa();
const router = new koaRouter();
const PORT = 3000;

// koaBody is needed just for POST.
app.use(koaBody());

// router.post('/graphql', graphqlKoa({ schema: myGraphQLSchema }));
// router.get('/graphql', graphqlKoa({ schema: myGraphQLSchema }));

import { graphiqlKoa } from 'apollo-server-koa';

// Setup the /graphiql route to show the GraphiQL UI
router.get(
  '/graphiql',
  graphiqlKoa({
    endpointURL: '/graphql', // a POST endpoint that GraphiQL will make the actual requests to
  }),
);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);