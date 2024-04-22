import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db'
dotenv.config()

// routers
import catRoutes from './routes/catRoutes'
import upload from './routes/upload'
import path from 'path'

const app = express()

const PORT = process.env.PORT || 5000

// connect to database
connectDB()

// cors
// app.use(cors())
const options = [
  cors({
    origin: '*',
    methods: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
]
app.use(options)
app.use(express.json({ limit: '50mb' }))
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/api/cats', catRoutes)
app.use('/api/upload', upload)

app.listen(PORT, () => {
  console.log(`Server on running on port ${PORT}`)
})
