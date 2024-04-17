import { Router } from 'express'
// controllers
import catController from '../controllers/cat-controller'

const router = Router()

//@ Cats
router.get('/', catController.getCats)

export default router
