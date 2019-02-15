
class ActivityController {
  async get(oCtx:any){
    oCtx.body = 'GET activity!'
  }
  async post(oCtx:any){
    oCtx.body = 'POST activity!'

  }
  async put(oCtx:any){
    oCtx.body = 'PUT activity!'

  }
  async delete(oCtx:any){
    oCtx.body = 'DELETE activity!'
  }
}

export default ActivityController;