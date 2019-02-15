import CoreModel from '../cores/model';

class ActivityModel extends CoreModel {
  constructor(){
    super();
    this.tableName = 'activities';
    this.option = {
        //where: {user_id: 2},
        attributes: ['activity_id', 'name', 'expired_time', 'deleted_time', 'updated_time', 'created_time'],
        raw : true
    };

    
  }
}

export default ActivityModel;