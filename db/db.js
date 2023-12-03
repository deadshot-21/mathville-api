require('dotenv').config();
const mongoose=require('mongoose')
const db=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.czxau.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;
// const db=process.env.URI;

mongoose.connect(db,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology: true,
    // useFindAndModify:false 
}).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log(err);
    console.log("No connection");
})