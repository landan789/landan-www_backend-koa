
// 引入GraphQL各种方法类型

import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    isOutputType
  } from 'graphql';
  
  import { UserModel } from './../models';

  
  // 定义日期时间 类型
  const objType = new GraphQLObjectType({
    name: 'mete',
    fields: {
      created_time: {
        type: GraphQLString
      },
      updated_time: {
        type: GraphQLString
      }
    }
  })
  
  // 定义Info的数据类型
  let UserType = new GraphQLObjectType({
    name: 'user',
    fields: {
      user_id: {
        type: GraphQLID
      },
      name: {
        type: GraphQLString
      },
    }
  })
  
  let _user = {
    'user_id': 111,
    'name': 'LANDAN'
  };
  // 批量查询
  const users = {
    type: new GraphQLList(UserType),
    args: {},
    resolve (root:any, params:any, options:any) {
      return _user // 数据库查询
    }
  }
  
  // 根据id查询单条info数据
  
  const user = {
    type: UserType,
    // 传进来的参数
    args: {
      id: {
        name: 'user_id',
        type: new GraphQLNonNull(GraphQLID) // 参数不为空
      }
    },
    resolve (root:any, params:any, options:any) {
      return _user // 查询单条数据
    }
  }
  
  // 导出GraphQLSchema模块
  
  export default new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Queries',
      fields: {
        users,
        user
      }
    })
  })