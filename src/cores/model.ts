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


class CoreModel {
  model:any;
  tableName:string;
  option:{};

  constructor() {
    this.model = {};
    this.tableName = '';
    this.option = {};
  }

  async show () {
    this.model = sequelize.define(this.tableName,{ 
      user_id: {
          type: Sequelize.STRING(50),
          primaryKey: true
      },
      name: Sequelize.STRING(100),
      created_time: Sequelize.BIGINT,
      updated_time: Sequelize.BIGINT,
    });


    let aUsers = await this.model.findAll(this.option);
    return aUsers;

  }

  add () {
    
  }
};

export default CoreModel;