const Analytics = require("../models/analytics.js");
const QuestionSet = require("../models/question_set.js");
const User = require("../models/user.js");

const getQuestionSet = async (req,res) => {

    try {
    const id = req.params.id;
    const questionSet = await QuestionSet.findOne({uuid: id});
        
    res.json({
        status: true,
        message: "Successfully retrieved question set",
        errors:[],
        data: {
            questionSet: questionSet
        }
    });
    } catch (error) {
        if (error) {
            res.json({
                status: false,
                message: "Error retrieving question set",
                errors:[error],
                data: {}
            });
    }
    }
};
    
const getAllQuestionSetsForUser = async (req, res) => {
    try {
        const uuid = req.params.uuid;
        const user = await User.findOne({ uuid: uuid });
        const questionSetIds = user.question_set_ids;
        let questionSets=[]
        questionSetIds.forEach(async (id) => {
            questionSets.push(await QuestionSet.findOne({ uuid: id }));
            // console.log(questionSets);
            if (questionSets.length == questionSetIds.length) {
                res.json({
                    status: true,
                    message: "Successfully retrieved question sets for user",
                    errors: [],
                    data: {
                        questionSets: questionSets,
                    },
                });
            }
        });
        // const questionSets = await QuestionSet.find({ uuid: { $in: questionSetIds } });
        // console.log(questionSets);
        
    } catch (error) {
        res.json({
            status: false,
            message: "Error retrieving question sets for user",
            errors: [error],
            data: {},
        });
    }
};

const updateQuestionSolved = async (req, res) => {
    try {
        // const { id, questionIndex, isSolved } = req.body;
        console.log(req.body);
        const questionSet = await QuestionSet.findOne({ uuid: req.body.questionSetUuid });
        questionSet.question[req.body.questionIndex].isSolved.push(req.body.userUuid);
        await questionSet.save();
        const user_analytics = await Analytics.findOne({ user_uuid: req.body.userUuid });
        // console.log(user_analytics.games_played);
        let question_analytics = user_analytics.games_played.filter(game => game.question_set_id == req.body.questionSetUuid)[0];
        // console.log(questionSet.question[req.body.questionIndex]);
        let user_question_details = {
            n1: questionSet.question[req.body.questionIndex].n1,
            n2: questionSet.question[req.body.questionIndex].n2,
            answer: questionSet.question[req.body.questionIndex].answer,
            answer_chosen: req.body.answerChosen,
            isCorrect: questionSet.question[req.body.questionIndex].answer == req.body.answerChosen
        }
        // console.log(user_question_details);
        question_analytics.question_details[req.body.questionIndex] = user_question_details;
        console.log(user_analytics.games_played);
        await user_analytics.save();

        res.json({
            status: true,
            message: "Successfully updated question set question",
            errors: [],
            data: {
                questionSet: questionSet,
            },
        });
    } catch (error) {
        res.json({
            status: false,
            message: "Error updating question set question",
            errors: [error],
            data: {},
        });
    }
};


module.exports = {
    getQuestionSet,
    getAllQuestionSetsForUser,
    updateQuestionSolved
};




