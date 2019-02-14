import Koa from 'koa';

const app = new Koa();

app.use(ctx => {
  ctx.body = 'xiadd'
});

app.listen(3000, () => {
  console.log('server is running')
});