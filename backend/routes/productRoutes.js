import express from 'express'
import Product from '../models/productModel.js'
import colors from 'colors'

const router = express.Router()

// @desc   Fetch all products
// @route  GET /api/products
// @access Public
router.get('/', (req, res, next) => {
  Product.find({})
    .then(products => {
      res.json(products)
    })
    .catch(error => {
      // Calling next with error to pass it to the error handling middleware
      next(error)
    })
})

// @desc   Fetch singe product
// @route  GET /api/product/:id
// @access Public
router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => {
      if (product) {
        res.json(product)
      } else {
        res.status(404)
        throw new Error('Product Not Found')
      }
    })
    .catch(error => {
      // Calling next with error to pass it to the error handling middleware
      next(error)
    })
})

export default router
