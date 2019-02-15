const DB:any = {
  USERNAME: 'backend',
  PASSWORD: 'mysql_pass_backend',
  DATABASE: 'landan',
  HOST: '127.0.0.1',
  DIALECT: 'mysql',
  REPLICATION: {
    WRITE: { host: 'localhost', port:3306, username: 'backend', password: 'mysql_pass_backend' },
    READ: [
      { host: 'localhost', port:3306, username: 'backend', password: 'mysql_pass_backend' },
      { host: 'localhost', port:3306, username: 'backend', password: 'mysql_pass_backend' }
    ]
  }
};

export default DB;
