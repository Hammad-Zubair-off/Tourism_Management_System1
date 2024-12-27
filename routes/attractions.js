const express = require('express');
const router = express.Router();
const attractionController = require('../controllers/attractionController');

router.post('/', attractionController.createAttraction);
router.get('/top-rated', attractionController.getTopRatedAttractions);

module.exports = router;
