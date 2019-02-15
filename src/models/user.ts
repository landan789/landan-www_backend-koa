import { CoreModel } from '../cores/';


class UserModel extends CoreModel {
  constructor(){
    super();
    this.tableName = 'users';
    this.option = {
        //where: {user_id: 2},
        attributes: ['user_id', 'name', 'expired_time', 'deleted_time', 'updated_time', 'created_time'],
        raw : true
    };

    
  }
}

export default UserModel;