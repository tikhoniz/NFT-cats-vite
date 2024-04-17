import CatModel from '../models/cat-model'

class CatService {
  async getCats() {
    const data = await CatModel.find({})

    return data
  }
}

export default new CatService()
