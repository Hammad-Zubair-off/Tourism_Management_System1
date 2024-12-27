const express = require('express');
const router = express.Router();
const visitorController = require('../controllers/visitorController');

router.post('/', visitorController.createVisitor);
router.post("/visit", visitorController.addVisitedAttraction); // Add visited attraction
router.get('/activity', visitorController.getVisitorActivity);


module.exports = router;
