import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

// Expose process.env
dotenv.config()

// Connect to MongoDB
connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res, next) => {
  res.send('API is running...')
})

// Products API route
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// 404 not-found middleware
app.use(notFound)
// Custom error handling middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
