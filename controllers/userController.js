const User = require("../models/user.js");
const QuestionSet = require("../models/question_set.js");
const UserAnalytics = require("../models/analytics.js");
const { v4: uuidv4 } = require("uuid");


const addDefaultQuestionSet = async (req,res) => {
try
   { const q = [];
    let count = 0;
    while(count<100) {
        let range = 10*Math.floor(count/15) + 9;
        const n1 = Math.floor(Math.random() * range);
        const n2 = Math.floor(Math.random() * range);
        if(n1!==0 && n2!==0 && (n1+n2<100) && !containsObject({n1:n1,n2:n2,answer:n1+n2,isSolved: [],operator:'+'},q)){
            count++;
            q.push({n1:n1,n2:n2,answer:n1+n2,isSolved: [],operator:'+'});
        }
        // q.push({n1:n1,n2:n2,answer:n1+n2,isSolved: [],operator:'+'});
    }
    
    q.sort((a, b) => a.answer - b.answer);
        
    const questionSet = new QuestionSet({
            uuid: uuidv4(),
            name: 'Addition Action',
            totalQuestions: q.length,
            question: q,
            isDefault: true,
            difficulty: 'easy',
        });
    
        await questionSet.save();
        res.json({
            status: true,
            message: "Question set has been",
            errors: [],
            data: {
            },
            });
    }
    catch(err){
        console.log(err);
        res.json({
            status: false,
            message: "Error while adding default question set",
            errors: err,
            data: {},
            });
    }
};

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] == obj) {
            return true;
        }
    }

    return false;
}

const subDefaultQuestionSet = async (req,res) => {
try
{ const q = [];
    let count = 0;
    while(count<100) {
        let range = 10*Math.floor(count/10) + 9;
        const n1 = Math.floor(Math.random() * range);
        const n2 = Math.floor(Math.random() * range);
        if(n1<n2){
            if(!containsObject({n1:n2,n2:n1,answer:Math.abs(n1-n2),isSolved: [],operator:'-'},q)){
                count++;
                q.push({n1:n2,n2:n1,answer:Math.abs(n1-n2),isSolved: [],operator:'-'});
            }
            // q.push({n1:n2,n2:n1,answer:Math.abs(n1-n2),isSolved: [],operator:'-'});
        }
        else
        {
            if(!containsObject({n1:n1,n2:n2,answer:Math.abs(n1-n2),isSolved: [],operator:'-'},q)){
                count++;
                q.push({n1:n1,n2:n2,answer:Math.abs(n1-n2),isSolved: [],operator:'-'});
            }
            // q.push({n1:n1,n2:n2,answer:Math.abs(n1-n2),isSolved: [],operator:'-'});
        }
    }

    q.sort((a, b) => (a.n2+a.answer) - (b.n2+b.answer));
        
    const questionSet = new QuestionSet({
            uuid: uuidv4(),
            name: 'Subtraction Safari',
            totalQuestions: q.length,
            question: q,
            isDefault: true,
            difficulty: 'easy',
        });

        await questionSet.save();
        res.json({
            status: true,
            message: "Question set has been",
            errors: [],
            data: {
            },
            });
    }
    catch(err){
        console.log(err);
        res.json({
            status: false,
            message: "Error while adding default question set",
            errors: err,
            data: {},
            });
    }
};

const mulDefaultQuestionSet = async (req,res) => {
try
    { const q = [];
    let count = 0;
    while(count<100) {
        let range = Math.floor(count/10) + 6;
        const n1 = Math.floor(Math.random() * range);
        const n2 = Math.floor(Math.random() * range);
        if(n1!==0 && n2!==0 && n1!==1 && n2!==1 && (n1*n2<100) && !containsObject({n1:n1,n2:n2,answer:n1*n2,isSolved: [],operator:'x'},q)){
            count++;
            q.push({n1:n1,n2:n2,answer:n1*n2,isSolved: [],operator:'x'});
        }
    }
    
    q.sort((a, b) => a.answer - b.answer);

    const questionSet = new QuestionSet({
            uuid: uuidv4(),
            name: 'Multiplication Madness',
            totalQuestions: q.length,
            question: q,
            isDefault: true,
            difficulty: 'medium',
        });
    
        await questionSet.save();
        res.json({
            status: true,
            message: "Question set has been",
            errors: [],
            data: {
            },
            });
    }
    catch(err){
        console.log(err);
        res.json({
            status: false,
            message: "Error while adding default question set",
            errors: err,
            data: {},
            });
    }
};

const divDefaultQuestionSet = async (req,res) => {
    try
        {
        const q = [];
        let count = 0;
        while (count<100) {
            let range = 10*Math.floor(count/10) + 29;
            const n1 = Math.floor(Math.random() * range);
            const n2 = Math.floor(Math.random() * range);
            if(n1>n2 && n1%n2==0 && !containsObject({n1:n1,n2:n2,answer:n1/n2,isSolved: [],operator:'/'},q) && n2!==0 && n2!==1){
                count++;
                q.push({n1:n1,n2:n2,answer:n1/n2,isSolved: [],operator:'/'});
            }
            // q.push({n1:n1,n2:n2,answer:n1/n2,isSolved: [],operator:'/'});
        }
        
        q.sort((a, b) => a.n1 - b.n1);

        const questionSet = new QuestionSet({
                uuid: uuidv4(),
                name: 'Division Detectives',
                totalQuestions: q.length,
                question: q,
                isDefault: true,
                difficulty: 'medium',
            });
        
            await questionSet.save();
            res.json({
                status: true,
                message: "Question set has been",
                errors: [],
                data: {
                },
                });
        }
        catch(err){
            console.log(err);
            res.json({
                status: false,
                message: "Error while adding default question set",
                errors: err,
                data: {},
                });
        }
    };
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
        
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        
        return array;
        }
        
const mulDivDefaultQuestionSet = async (req,res) => {
    try
    { 
    let q = [];
    let count = 0;
    while(count<50) {
        let range = Math.floor(count/10) + 12;
        const n1 = Math.floor(Math.random() * range);
        const n2 = Math.floor(Math.random() * range);
        if(n1!==0 && n2!==0 && n1!==1 && n2!==1 && (n1*n2<100) && !containsObject({n1:n1,n2:n2,answer:n1*n2,isSolved: [],operator:'x'},q)){
            count++;
            q.push({n1:n1,n2:n2,answer:n1*n2,isSolved: [],operator:'x'});
        }
    }
    count = 0;
    while (count<50) {
        let range = 10*Math.floor(count/10) + 29;
        const n1 = Math.floor(Math.random() * range);
        const n2 = Math.floor(Math.random() * range);
        if(n1>n2 && n1%n2==0 && !containsObject({n1:n1,n2:n2,answer:n1/n2,isSolved: [],operator:'/'},q) && n2!==0 && n2!==1){
            count++;
            q.push({n1:n1,n2:n2,answer:n1/n2,isSolved: [],operator:'/'});
        }
        // q.push({n1:n1,n2:n2,answer:n1/n2,isSolved: [],operator:'/'});
    }
    // q.sort((a, b) => (a.n2+a.answer) - (b.n2+b.answer));
    q = shuffle(q);
    const questionSet = new QuestionSet({
            uuid: uuidv4(),
            name: 'Multiply, Divide, and Conquer',
            totalQuestions: q.length,
            question: q,
            isDefault: true,
            difficulty: 'hard',
        });
    
        await questionSet.save();
        res.json({
            status: true,
            message: "Question set has been",
            errors: [],
            data: {
            },
            });
    }
    catch(err){
        console.log(err);
        res.json({
            status: false,
            message: "Error while adding default question set",
            errors: err,
            data: {},
            });











            
    }
};

const allFourDefaultQuestionSet = async (req,res) => {
try
    { 
    let q = [];
    let count = 0;
    while(count<50) {
        let range = Math.floor(count/10) + 12;
        const n1 = Math.floor(Math.random() * range);
        const n2 = Math.floor(Math.random() * range);
        if(n1!==0 && n2!==0 && n1!==1 && n2!==1 && (n1*n2<100) && !containsObject({n1:n1,n2:n2,answer:n1*n2,isSolved: [],operator:'x'},q)){
            count++;
            q.push({n1:n1,n2:n2,answer:n1*n2,isSolved: [],operator:'x'});
        }
    }
    count = 0;
    while (count<50) {
        let range = 10*Math.floor(count/10) + 29;
        const n1 = Math.floor(Math.random() * range);
        const n2 = Math.floor(Math.random() * range);
        if(n1>n2 && n1%n2==0 && !containsObject({n1:n1,n2:n2,answer:n1/n2,isSolved: [],operator:'/'},q) && n2!==0 && n2!==1){
            count++;
            q.push({n1:n1,n2:n2,answer:n1/n2,isSolved: [],operator:'/'});
        }
        // q.push({n1:n1,n2:n2,answer:n1/n2,isSolved: [],operator:'/'});
    }
    count = 0;
    while(count<50) {
        let range = 10*Math.floor(count/10) + 19;
        const n1 = Math.floor(Math.random() * range);
        const n2 = Math.floor(Math.random() * range);
        if(n1<n2){
            if(n1!==0 && n2!==0 && !containsObject({n1:n2,n2:n1,answer:Math.abs(n1-n2),isSolved: [],operator:'-'},q)){
                count++;
                q.push({n1:n2,n2:n1,answer:Math.abs(n1-n2),isSolved: [],operator:'-'});
            }
            // q.push({n1:n2,n2:n1,answer:Math.abs(n1-n2),isSolved: [],operator:'-'});
        }
        else
        {
            if(n1!==0 && n2!==0 && !containsObject({n1:n1,n2:n2,answer:Math.abs(n1-n2),isSolved: [],operator:'-'},q)){
                count++;
                q.push({n1:n1,n2:n2,answer:Math.abs(n1-n2),isSolved: [],operator:'-'});
            }
            // q.push({n1:n1,n2:n2,answer:Math.abs(n1-n2),isSolved: [],operator:'-'});
        }
    }
    count = 0;
    while(count<50) {
        let range = 10*Math.floor(count/10) + 19;
        const n1 = Math.floor(Math.random() * range);
        const n2 = Math.floor(Math.random() * range);
        // if(n1<n2){
        if(n1!==0 && n2!==0 && !containsObject({n1:n2,n2:n1,answer:Math.abs(n1+n2),isSolved: [],operator:'+'},q)){
            count++;
            q.push({n1:n2,n2:n1,answer:Math.abs(n1+n2),isSolved: [],operator:'+'});
        }
            // q.push({n1:n2,n2:n1,answer:Math.abs(n1-n2),isSolved: [],operator:'-'});
        // }
    }
    // q.sort((a, b) => (a.n2+a.answer) - (b.n2+b.answer));
    q = shuffle(q);
    const questionSet = new QuestionSet({
            uuid: uuidv4(),
            name: 'The Fantastic Four-Op Journey',
            totalQuestions: q.length,
            question: q,
            isDefault: true,
            difficulty: 'hard',
        });
    
        await questionSet.save();
        res.json({
            status: true,
            message: "Question set has been",
            errors: [],
            data: {
            },
            });
    }
    catch(err){
        console.log(err);
        res.json({
            status: false,
            message: "Error while adding default question set",
            errors: err,
            data: {},
            });
    }
};

const plusMinusDefaultQuestionSet = async (req,res) => {
    try
        { 
        let q = [];
        let count = 0;
        while(count<50) {
            let range = 10*Math.floor(count/10) + 19;
            const n1 = Math.floor(Math.random() * range);
            const n2 = Math.floor(Math.random() * range);
            if(n1<n2){
                if(n1!==0 && n2!==0 && !containsObject({n1:n2,n2:n1,answer:Math.abs(n1-n2),isSolved: [],operator:'-'},q)){
                    count++;
                    q.push({n1:n2,n2:n1,answer:Math.abs(n1-n2),isSolved: [],operator:'-'});
                }
                // q.push({n1:n2,n2:n1,answer:Math.abs(n1-n2),isSolved: [],operator:'-'});
            }
            else
            {
                if(n1!==0 && n2!==0 && !containsObject({n1:n1,n2:n2,answer:Math.abs(n1-n2),isSolved: [],operator:'-'},q)){
                    count++;
                    q.push({n1:n1,n2:n2,answer:Math.abs(n1-n2),isSolved: [],operator:'-'});
                }
                // q.push({n1:n1,n2:n2,answer:Math.abs(n1-n2),isSolved: [],operator:'-'});
            }
        }
        count = 0;
        while(count<50) {
            let range = 10*Math.floor(count/10) + 19;
            const n1 = Math.floor(Math.random() * range);
            const n2 = Math.floor(Math.random() * range);
            // if(n1<n2){
            if(n1!==0 && n2!==0 && !containsObject({n1:n2,n2:n1,answer:Math.abs(n1+n2),isSolved: [],operator:'+'},q)){
                count++;
                q.push({n1:n2,n2:n1,answer:Math.abs(n1+n2),isSolved: [],operator:'+'});
            }
                // q.push({n1:n2,n2:n1,answer:Math.abs(n1-n2),isSolved: [],operator:'-'});
            // }
        }
        // q.sort((a, b) => (a.n2+a.answer) - (b.n2+b.answer));
        q = shuffle(q);
        const questionSet = new QuestionSet({
                uuid: uuidv4(),
                name: 'Plus-Minus Party',
                totalQuestions: q.length,
                question: q,
                isDefault: true,
                difficulty: 'medium',
            });
        
            await questionSet.save();
            res.json({
                status: true,
                message: "Question set has been",
                errors: [],
                data: {
                },
                });
        }
        catch(err){
            console.log(err);
            res.json({
                status: false,
                message: "Error while adding default question set",
                errors: err,
                data: {},
                });
        }
    };

const register = async (req, res) => {
    const questionSetUUIDs = await QuestionSet.find({ isDefault: true }).distinct('uuid');
    let user = req.body;
    const uuid = uuidv4();
    user.uuid = uuid;
    user.question_set_ids = questionSetUUIDs;
    try {

        const newUser = new User(user);
        await newUser.save();
        res.json({
        status: true,
        message: "User has been saved",
        errors: [],
        data: {
            uuid: user.uuid,
            question_set_ids: user.question_set_ids,
        },
        });
    } catch (error) {
        console.log(error);
        res.json({
        status: false,
        message: "Email has already been used once.",
        errors: error,
        data: {},
        });
    }
};


const login = async (req, res) => {
    console.log(req.body);
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    console.log(user);
    res.json({
        status: true,
        message: "You are logged in !",
        errors:[],
        data: {
            uuid: user.uuid,
            question_set_ids: user.question_set_ids,
        }
    })
  } catch (error) {
    if (error.message === "Invalid Email") {
        // let questionSetUUIDs = await QuestionSet.find({ isDefault: true }).distinct('uuid');
        let questionSetUUIDs=[];
        const questionSet = await QuestionSet.find({ isDefault: true });
        // console.log(questionSet);
        questionSet.forEach((element) => {
        // console.log(element);
            questionSetUUIDs.push(element.uuid);
        });
        let user = req.body;
        const uuid = uuidv4();
        user.uuid = uuid;
        user.question_set_ids = questionSetUUIDs;
        console.log(questionSetUUIDs);
        try {

            const newUser = new User(user);
            await newUser.save();
            let games_played = [];
            questionSetUUIDs.forEach(async (element) => {
                let question_details = await QuestionSet.findOne({ uuid: element });
                // console.log(question_details);
                // console.log(element);
                games_played.push({
                    question_set_id: element,
                    name: question_details.name,
                    totalQuestions: question_details.totalQuestions,
                    question_details: []
                });
                console.log(games_played.length);
                
                if (questionSetUUIDs.indexOf(element) == questionSetUUIDs.length - 1) {
                    setTimeout(async () => {
                    const user_analytics = new UserAnalytics({
                        user_uuid: uuid,
                        games_played: games_played,
                    });
                    await user_analytics.save();
                    res.json({
                    status: true,
                    message: "User has been saved",
                    errors: [],
                    data: {
                        uuid: user.uuid,
                        question_set_ids: user.question_set_ids,
                    },
                    });
                },3000);
                }
            
            });
            
            
        } catch (error) {
            console.log(error);
            res.json({
            status: false,
            message: "Email has already been used once.",
            errors: error,
            data: {},
            });
        }
    }
    else{
        console.log(error);
        res.json({
        status: false,
        message: "Invalid Email or Password",
        errors:[error],
        data: {}
    })
    }
    
  }
};

const isValidUser = async (req,res) => {
    try {
        const user = await User.findOne({ uuid: req.body.uuid });
        // if (user) {
        //     return true;
        // } else {
        //     return false;
        // }
        if (user) {
            res.json({
            status: true,
            message: "Valid User",
            errors:[],
            data: {}
        });
        }
        else{
            res.json({
            status: false,
            message: "Invalid User",
            errors:[],
            data: {}
        });
        }
        
    } catch (error) {
        // console.error(error);
        // return false;
        res.json({
            status: false,
            message: "Invalid User",
            errors:[error],
            data: {}
        });
    }
};

module.exports = {
  register,
  login,
  addDefaultQuestionSet,
  subDefaultQuestionSet,
  mulDefaultQuestionSet,
  divDefaultQuestionSet,
  plusMinusDefaultQuestionSet,
  mulDivDefaultQuestionSet,
  allFourDefaultQuestionSet,
  isValidUser
};