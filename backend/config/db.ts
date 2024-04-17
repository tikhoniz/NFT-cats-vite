import mongoose from 'mongoose'

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI || '/', {})
    console.log('Successful MongoDB connection')
  } catch (error: any) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
