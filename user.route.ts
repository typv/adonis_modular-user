import router from '@adonisjs/core/services/router'
import { middleware } from "#start/kernel";
const UserController = () => import('#modules/user/controllers/user.controller')


router.group(() => {
  router.get('/', [UserController, 'index']).use(
    middleware.auth({
      guards: ['api'],
    })
  )
}).prefix('/api/v1/users')
