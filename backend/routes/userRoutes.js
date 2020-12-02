import express from 'express'
import {
  registerUser,
  authUser,
  getUserProfile,
} from '../controllers/userController.js'
import asyncHandler from '../middleware/asyncHandlerMiddleware.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

// Routes
router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

export default router
