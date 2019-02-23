import { BodyHelper } from './../helpers';

let oBodyHelper = new BodyHelper();

function requestUndefinedPath () {
  return async (oCtx:any, fNext:()=>{} ) => {
    let oBody = oBodyHelper.reponse('IT_REQUESTS_UNDEFINED_PATH');
    oCtx.response.body = oBody;
    await fNext();
  }
}

export default requestUndefinedPath;