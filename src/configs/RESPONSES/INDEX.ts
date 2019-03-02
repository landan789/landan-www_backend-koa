const RESPONSEES: any = {
  'SUCCED_TO_SHOW_USER': {
    STATUS: 200,
    RESULT: 1, 
    CODE: 0, 
    MESSAGE: 'succed to show user'
  },
  'UNKNON_ERROR': { 
    STATUS: 500,
    RESULT: -1, 
    CODE: -1, 
    MESSAGE: 'unknown error'
  },
  'REQUEST_NONEXISTENT_URI': {
    STATUS: 501,
    RESULT: -2, 
    CODE: -1, 
    MESSAGE: 'request nonexistent URI'
  },
  'FAIL_TO_SHOW_USER': {
    STATUS: 500,
    RESULT: -1, 
    CODE: -3, 
    MESSAGE: 'fail to show user'
  }
};

export default RESPONSEES;
