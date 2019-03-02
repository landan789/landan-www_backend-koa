
class ActivityController {
  async getShow(oCtx: any) {
    oCtx.body = 'GET activity!'
  }
  async postAdd(oCtx: any) {
    oCtx.body = 'POST activity!'

  }
  async putEdit(oCtx: any) {
    oCtx.body = 'PUT activity!'

  }
  async deleteRemove(oCtx: any) {
    oCtx.body = 'DELETE activity!'
  }
}

export default ActivityController;