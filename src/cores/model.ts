import Sequelize from 'sequelize';

import { DB } from './../configs/index';

const sequelize = new Sequelize(DB.DATABASE, '', '', {
  host: DB.HOST,
  dialect: DB.DIALECT,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // 请参考 Querying - 查询 操作符 章节
  operatorsAliases: false,

  replication: {
    write: DB.REPLICATION.WRITE,
    read:  DB.REPLICATION.READ
  }

});


class Model {
  table:{};
  tableName:string;

  constructor() {
    this.table = {};
    this.tableName = '';
  }

  show () {
    this.table = sequelize.define(this.tableName, {
      username: Sequelize.STRING,
      birthday: Sequelize.DATE
    });
  }

  add () {
    
  }
};