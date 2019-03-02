import { RESPONSES } from '../../configs';


class BodyHelper {
  reponse (message:string, data?: {}) {
    let oBody = {
      result: RESPONSES[message].RESULT || -1,
      code: RESPONSES[message].CODE || 0,
      message: RESPONSES[message].MESSAGE || '',
      jwt: '',
      total_count: 0,
      data: data || {}
    }
    return oBody;

  }
};

export default BodyHelper;