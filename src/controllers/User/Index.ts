import { UserModel } from '../../models';
import { BodyHelper } from '../../helpers';

let oUserModel = new UserModel();
let oBodyHelper = new BodyHelper();


class UserController {

  async getShow(oCtx:any){

    let oBody:{} = {};

    try {
      let aUsers:[] = await oUserModel.show();
      if (null === aUsers || undefined === aUsers) {
        throw 'FAIL_TO_SHOW_USER';
      }
      let oData = {
        users: aUsers
      };
      oBody = oBodyHelper.reponse('SUCCED_TO_SHOW_USER', oData);
    } catch (sErrorMessage) {
      oBody = oBodyHelper.reponse(sErrorMessage);
    } finally {
      oCtx.response.body = oBody || oBodyHelper.reponse('UNKNON_ERROR', []);
    }
  }

  async postAdd(oCtx:any){

    oCtx.response.body = 'POST user!'

  }

  async putEdit(oCtx:any){

    oCtx.body = 'PUT user!'

  }

  async deleteRemove(oCtx:any){

    oCtx.body = 'DELETE user!'
  }
}

export default UserController;