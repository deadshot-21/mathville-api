
const express = require('express');
const router = express.Router();

const analyticsController = require('../controllers/analyticsController.js');

router.get('/getGeneralAnalytics/:uuid', analyticsController.getGeneralAnalytics);

// router.post('/updateQuestionSolved', analyticsController.updateQuestionSolved);

module.exports = router;