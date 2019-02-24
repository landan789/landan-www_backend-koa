const REPONSEES:any = {
  'IT_SUCCEDS_TO_SHOW_USER': { 
    STATUS: 200, 
    RESULT: 1, 
    CODE: 0, 
    MESSAGE: 'it succeds to show user'
  },
  'IT_IS_UNKNOWN_ERROR': { 
    STATUS: 500, 
    RESULT: -1, 
    CODE: -0.01, 
    MESSAGE: 'it is unknown error'
  },
  'IT_REQUESTS_UNDEFINED_PATH': { 
    STATUS: 501, 
    RESULT: -1, 
    CODE: -0.02, 
    MESSAGE: 'it requests undefined path'
  },
  'IT_FAILS_TO_SHOW_USER': { 
    STATUS: 500, 
    RESULT: -1, 
    CODE: -1.01, 
    MESSAGE: 'it fails to show user'
  }
};

export default REPONSEES;
