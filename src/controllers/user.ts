
class User {
  get(ctx:any){
    ctx.body = 'GET user!'
  }
  post(ctx:any){
    ctx.body = 'POST user!'

  }
  put(ctx:any){
    ctx.body = 'PUT user!'

  }
  delete(ctx:any){
    ctx.body = 'DELETE user!'
  }
}

let oUser = new User();

export default oUser;