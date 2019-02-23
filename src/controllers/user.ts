import { UserModel } from './../models';
import { BodyHelper } from './../helpers';

let oUserModel = new UserModel();
let oBodyHelper = new BodyHelper();


class UserController {

  async getOne(oCtx:any){

    let oBody:{} = {};

    try {
      let aUsers:any = await oUserModel.show();
      if (null === aUsers || undefined === aUsers) {
        throw 'FAIL_TO_SHOW_USER';
      }
      oBody = oBodyHelper.reponse('SUCCED_TO_SHOW_USER', aUsers);
    } catch (sErrorMessage) {
      oBody = oBodyHelper.reponse(sErrorMessage);
    } finally {
      oCtx.response.body = oBody || oBodyHelper.reponse('IT_IS_UNKNOWN_ERROR', []);
    }
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