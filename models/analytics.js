
const mongoose = require('mongoose');

// const questionSetSchema = new mongoose.Schema({
//   // Define the schema for the question set here
// });

const analyticsSchema = new mongoose.Schema({
  user_uuid: {
    type: String,
    required: true
  },
  games_played: [{
    type:{
        question_set_id: {
            type: String,
        },
        name: {
            type: String,
            required: true
        },
        totalQuestions: {
            type: Number,
        },
        
        question_details: {
            type: [{
                n1: {
                    type: Number,
                },
                n2: {
                    type: Number,
                },
                answer: {
                    type: Number,
                },
                answer_chosen: {
                    type: Number,
                },
                isCorrect: {
                    type: Boolean,
                },
            }],
        },
        
    }
  }]
});

const Analytics = mongoose.model('Analytics', analyticsSchema);
module.exports = Analytics;
