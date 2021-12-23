const express = require('express')
const router = express.Router()
const candiadatController = require('../Controllers/candidatController')
const upload = require('../middleware/multer');

router.post('/create',upload.single('filename'),candiadatController.create)
router.get('/getall',upload.single('filename'),candiadatController.readAll)

module.exports = router