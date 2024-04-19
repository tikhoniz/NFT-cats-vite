import { Router } from 'express'

import fileMiddleware from '../middleware/file'

const router = Router()

//@ Upload
router.post('/', fileMiddleware.single('nft'), (req, res) => {
  try {
    // записать в базу req.file.path
    if (req.file) {
      res.json(req.file)
    }
  } catch (error) {
    console.log(error)
  }
})

export default router
