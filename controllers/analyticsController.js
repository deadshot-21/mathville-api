const Analytics = require("../models/analytics.js");
const QuestionSet = require("../models/question_set.js");
const User = require("../models/user.js");

const getGeneralAnalytics = async (req,res) => {
    try {
    const user_uuid = req.params.uuid;
    const analytics = await Analytics.findOne({user_uuid: user_uuid});
    let solved = 0;
    let correct = 0;
    analytics.games_played.forEach(element => {
        element.question_details.filter((question) => {
            if (question!=null && question.isCorrect) {
                correct++;
            }
            if (question !== null) {
                solved++;
            }
        });
    });

    res.json({
        status: true,
        message: "Successfully retrieved question set",
        errors:[],
        data: {
            solved: solved,
            correct:correct,
            games_played: analytics.games_played
        }
    });
    } catch (error) {
        console.log(error);
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

module.exports = {
    getGeneralAnalytics
};