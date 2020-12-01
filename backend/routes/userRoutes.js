import express from 'express'
import { authUser } from '../controllers/userController.js'

const router = express.Router()

// Routes
router.post('/login', authUser)

export default router
