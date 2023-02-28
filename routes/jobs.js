// job route for handling Jobs

const express = require('express')

const router = express.Router()

const { getAllJobs, getJob, createJob, deleteJOb } = require('../controllers/jobs')

// route
router.route('/').post(createJob).get(getAllJobs)
router.route('/:id').get(getJob).delete(deleteJOb)

module.exports = router

