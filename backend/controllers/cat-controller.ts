import catService from '../service/cat-service'

class CatController {
  //* @desc  Получение всех котов
  //* @route  GET /api/cats
  //* @access Public
  async getCats(req: any, res: any, next: any) {
    try {
      const data = await catService.getCats()

      res.json(data)
    } catch (error) {
      next(error)
    }
  }
}

export default new CatController()
