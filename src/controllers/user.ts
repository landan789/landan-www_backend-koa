import UserModel from './../models/users';

let oUserModel = new UserModel();

class UserController {
  async getOne(oCtx:any){

    let aUsers = await oUserModel.show();
    oCtx.response.body = aUsers;

  }
  async postOne(oCtx:any){
    oCtx.response.body = 'POST user!'

  }
  async putOne(oCtx:any){
    oCtx.body = 'PUT user!'

  }
  async deleteOne(oCtx:any){
    oCtx.body = 'DELETE user!'
  }
}

export default UserController;