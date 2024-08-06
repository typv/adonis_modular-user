import type { HttpContext } from '@adonisjs/core/http'
import User from "#modules/user/models/user";

export default class UserController {
  async index(ctx: HttpContext) {
    const user = await User.find(3)
    return user
  }
}
