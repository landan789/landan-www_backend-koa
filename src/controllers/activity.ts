
class ActivityController {
  get(oRes:any){
    oRes.body = 'GET activity!'
  }
  post(oRes:any){
    oRes.body = 'POST activity!'

  }
  put(oRes:any){
    oRes.body = 'PUT activity!'

  }
  delete(oRes:any){
    oRes.body = 'DELETE activity!'
  }
}

export default ActivityController;