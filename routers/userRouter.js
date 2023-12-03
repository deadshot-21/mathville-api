
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');


router.post('/login',userController.login);

router.post('/register', userController.register);

router.post('/addDefaultQuestionSet', userController.addDefaultQuestionSet);

router.post('/subDefaultQuestionSet', userController.subDefaultQuestionSet);

router.post('/mulDefaultQuestionSet', userController.mulDefaultQuestionSet);

router.post('/divDefaultQuestionSet', userController.divDefaultQuestionSet);

router.post('/plusMinusDefaultQuestionSet', userController.plusMinusDefaultQuestionSet);

router.post('/mulDivDefaultQuestionSet', userController.mulDivDefaultQuestionSet);

router.post('/allFourDefaultQuestionSet', userController.allFourDefaultQuestionSet);

router.post('/isValidUser', userController.isValidUser);

module.exports = router;
