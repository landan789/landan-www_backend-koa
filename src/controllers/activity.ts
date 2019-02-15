
class ActivityController {
  get(oCtx:any){
    oCtx.body = 'GET activity!'
  }
  post(oCtx:any){
    oCtx.body = 'POST activity!'

  }
  put(oCtx:any){
    oCtx.body = 'PUT activity!'

  }
  delete(oCtx:any){
    oCtx.body = 'DELETE activity!'
  }
}

export default ActivityController;