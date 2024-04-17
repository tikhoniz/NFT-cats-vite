import { Schema, model } from 'mongoose'

const CatSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true },
)

export default model('Cat', CatSchema)
