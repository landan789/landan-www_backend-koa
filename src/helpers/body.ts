import { REPONSES } from '../configs';


class ResponseHelper {
  reponse (message:string, data?:[]) {
    let oBody = {
      status: REPONSES[message].STATUS || -1,
      code: REPONSES[message].CODE || 0,
      message: REPONSES[message].MESSAGE || '',
      data: data || []
    }
    return oBody;

  }
};

export default ResponseHelper;