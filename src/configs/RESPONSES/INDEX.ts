const RESPONSEES: any = {
  'IT_SUCCEDS_TO_SHOW_USER': {
    STATUS: 200,
    RESULT: 1, 
    CODE: 0, 
    MESSAGE: 'it succeds to show user'
  },
  'IT_IS_UNKNON_ERROR': { 
    STATUS: 500,
    RESULT: -1, 
    CODE: -1, 
    MESSAGE: 'it is unknown error'
  },
  'IT_REQUESTS_NONEXISTENT_URI': {
    STATUS: 501,
    RESULT: -2, 
    CODE: -1, 
    MESSAGE: 'it requests nonexistent URI'
  },
  'IT_FAIL_TO_SHOW_USER': {
    STATUS: 500,
    RESULT: -1, 
    CODE: -3, 
    MESSAGE: 'it fails to show user'
  }
};

export default RESPONSEES;
