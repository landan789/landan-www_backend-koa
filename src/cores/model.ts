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
  table:{};
  tableName:string;

  constructor() {
    this.table = {};
    this.tableName = 'users';
  }

  show () {
    let Users = sequelize.define(this.tableName, {
      username: Sequelize.STRING,
      birthday: Sequelize.DATE
    });

    Users.findOne({
      where: {id: 1},
      attributes: ['id', ['name', 'title']]
    }).then(function(Users) {

      console.log(Users);
    })
  }

  add () {
    
  }
};

export default CoreModel;