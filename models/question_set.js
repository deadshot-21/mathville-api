
const mongoose = require('mongoose');

const questionSetSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  totalQuestions: {
    type: Number,
  },
  // n1: {
  //   type: [Number],
  // },
  // n2: {
  //   type: [Number],
  // },
  // answer: {
  //   type: [Number],
  // },
  question:{
    type:[
      {
        n1:{
          type:Number
        },
        n2:{
          type:Number
        },
        answer:{
          type:Number
        },
        isSolved: {
          type: [String],
        },
        operator:{
          type:String
        }
      }
    ]
  },
  isDefault: {
    type: Boolean,
  },
  difficulty: {
    type: String,
  },
});

const QuestionSet = mongoose.model('QuestionSet', questionSetSchema);
module.exports = QuestionSet;
