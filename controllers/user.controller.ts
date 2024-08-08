import type { HttpContext } from '@adonisjs/core/http'
import User from "#common/models/user";

export default class UserController {
  async index(ctx: HttpContext) {
    // const authUser = ctx.auth.user
    // console.log("authUser: ", authUser);

    const user = await User.all()
    return user
  }
}
