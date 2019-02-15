import { BodyHelper } from './../helpers';

let oBodyHelper = new BodyHelper();

function requestUndefinedPath () {
  return async (oCtx:any, fNext:any ) => {
    let oBody = oBodyHelper.reponse('REQUEST_UNDEFINED_PATH');
    oCtx.response.body = oBody;
    await fNext();
  }
}

export default requestUndefinedPath;