import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import products from './data/products.js'

// Expose process.env
dotenv.config()

// Connect to MongoDB
connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

// Fetch all products
app.get('/api/products', (req, res) => {
  res.json(products)
})

// Fetch single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

// Reading PORT from process.env thanks to dotenv package
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
