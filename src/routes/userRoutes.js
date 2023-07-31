import { Router } from 'express'
import { getUserController } from '../use-cases/get-user/index.js'

const router = Router()

router.get('/:name', (req, res) => getUserController.handle(req, res))

export { router as userRoutes }
