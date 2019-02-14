import cluster from 'cluster';
import os from 'os';
import Koa from 'koa';

import { HTTP } from './configs/index';

console.log(HTTP);

const intCPULength = 4;


if (cluster.isMaster) {
  console.log(`主进程 ${process.pid} 正在运行`);
  for (let i = 0; i < intCPULength; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`工作进程 ${worker.process.pid} 已退出`);
  });
}else {
  const main = new Koa();

  main.use(ctx => {
    ctx.body = 'HIHIHHIHIHI'
  });
  
  main.listen(3000, () => {
    console.log('server is running')
  });
}
