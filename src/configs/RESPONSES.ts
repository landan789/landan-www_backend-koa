const REPONSEES:any = {
  'SUCCED_TO_SHOW_USER': { status: 1, code: 0, message: 'succed to show user'},
  'UNKNON_ERROR': { status: -1, code: -1, message: 'unknown error'},
  'REQUEST_NONEXISTENT_URI': { status: -2, code: -1, message: 'request nonexistent URI'},
  'FAIL_TO_SHOW_USER': { status: -1, code: -3, message: 'fail to show user'}
};

export default REPONSEES;
