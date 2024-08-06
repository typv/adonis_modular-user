import router from '@adonisjs/core/services/router'
const UserController = () => import('#modules/user/controllers/user.controller')

router.get('users', [UserController, 'index'])
