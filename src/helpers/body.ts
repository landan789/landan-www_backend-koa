import { REPONSES } from '../configs';


class ResponseHelper {
  reponse (message:string, data?:[]) {
    let oBody = {
      status: REPONSES[message].status || -1,
      code: REPONSES[message].code || 0,
      message: REPONSES[message].message || '',
      data: data || []
    }
    return oBody;

  }
};

export default ResponseHelper;