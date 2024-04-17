import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db'
dotenv.config()

// routers
import catRoutes from './routes/catRoutes'

const app = express()

const PORT = process.env.PORT || 5000

// connect to database
connectDB()

// cors
app.use(cors())

app.use(express.json({ limit: '50mb' }))

app.use('/api/cats', catRoutes)

app.listen(PORT, () => {
  console.log(`Server on running on port ${PORT}`)
})
