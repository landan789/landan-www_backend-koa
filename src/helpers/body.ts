import { REPONSES } from '../configs';


class ResponseHelper {
  reponse (message:string, data?:[]) {
    let oBody = {
      result: REPONSES[message].result || -1,
      code: REPONSES[message].CODE || 0,
      message: REPONSES[message].MESSAGE || '',
      data: data || []
    }
    return oBody;

  }
};

export default ResponseHelper;