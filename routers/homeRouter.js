
const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController.js');

router.get('/getQuestionSet/:id', homeController.getQuestionSet);

router.get('/getAllQuestionSetsForUser/:uuid', homeController.getAllQuestionSetsForUser);

router.post('/updateQuestionSolved', homeController.updateQuestionSolved);

module.exports = router;
