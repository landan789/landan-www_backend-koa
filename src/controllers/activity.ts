
class ActivityController {
  get(ctx:any){
    ctx.body = 'GET activity!'
  }
  post(ctx:any){
    ctx.body = 'POST activity!'

  }
  put(ctx:any){
    ctx.body = 'PUT activity!'

  }
  delete(ctx:any){
    ctx.body = 'DELETE activity!'
  }
}

export default ActivityController;