
import express from 'express'

import createtask from '../controllers/taskController.js'


const router = express.Router()

router.post('/tasks',createtask)

export default router;