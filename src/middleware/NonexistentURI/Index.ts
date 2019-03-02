import { BodyHelper } from './../../helpers';

let oBodyHelper = new BodyHelper();

class NonexistentURIMiddleware {
  handle () {
    return async (oCtx:any, fNext:()=>{} ) => {
      let oBody = oBodyHelper.reponse('REQUEST_UNDEFINED_PATH');
      oCtx.response.body = oBody;
      await fNext();
    }
  }
}
export default NonexistentURIMiddleware;
