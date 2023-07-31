import { GetUserController } from '../../controllers/get-user/get-user-controller.js'
import { UsersRepository } from '../../repositories/users/user-repository.js'
import { GetUserUseCase } from './get-user-use-case.js'

const usersRepository = UsersRepository()
const getUserUseCase = GetUserUseCase(usersRepository)
const getUserController = GetUserController(getUserUseCase)

export { getUserController }
