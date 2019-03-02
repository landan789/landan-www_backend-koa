import { RESPONSES } from '../../configs';


class BodyHelper {
  reponse (message:string, data?:[]) {
    let oBody = {
      status: RESPONSES[message].status || -1,
      code: RESPONSES[message].code || 0,
      message: RESPONSES[message].message || '',
      jwt: '',
      total_count: 0,
      data: data || {}
    }
    return oBody;

  }
};

export default BodyHelper;