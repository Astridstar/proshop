import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

const router = express.Router()

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    //res.status(401)
    //res.statusMessage('Testing failed message')
    res.json(products)
  })
)

// @desc    Fetch a single products
// @route   GET /api/products/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    //const product = products.find((p) => p._id === req.params.id)
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      //res.status(404).json({ message: 'Product not found' })

      //Alternative method with middleware
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
