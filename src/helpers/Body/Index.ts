import { REPONSES } from '../../configs';


class ResponseHelper {
  reponse (message:string, data?:[]) {
    let oBody = {
      status: REPONSES[message].status || -1,
      code: REPONSES[message].code || 0,
      message: REPONSES[message].message || '',
      jwt: '',
      total_count: 0,
      data: data || {}
    }
    return oBody;

  }
};

export default ResponseHelper;