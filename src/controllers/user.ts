import UserModel from './../models/users';

let oUserModel = new UserModel();

class UserController {
  async getOne(ctx:any){

    let aUsers = await oUserModel.show();
    ctx.response.body = aUsers;

  }
  async postOne(oRes:any){
    oRes.response.body = 'POST user!'

  }
  async putOne(oRes:any){
    oRes.body = 'PUT user!'

  }
  async deleteOne(oRes:any){
    oRes.body = 'DELETE user!'
  }
}

export default UserController;