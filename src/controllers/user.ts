import { UserModel } from './../models';
import { BodyHelper } from './../helpers';

let oUserModel = new UserModel();
let oBodyHelper = new BodyHelper();


class UserController {

  async getOne(oCtx:any){

    try {
      let aUsers = await oUserModel.show();
      if (null === aUsers || undefined === aUsers) {
        throw 'FAIL_TO_SHOW_USER';
      }
      
      let oBody = oBodyHelper.reponse('SUCCED_TO_SHOW_USER', aUsers);
      oCtx.response.body = oBody;
    } catch (e) {
      let oBody = oBodyHelper.reponse(e, []);
      oCtx.response.body = oBody;
    }


    return;
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