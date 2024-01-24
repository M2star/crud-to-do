const express = require('express')
const { allTask, createTask, fineOneTask, removeTask, updateTask } = require('../connection/index.js')

const router = express.Router()

router.route('/').get(allTask).post(createTask)
router.route('/:id').get(fineOneTask).delete(removeTask).patch(updateTask)

module.exports = router