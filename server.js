const express=require('express')
const mongoose=require('./db/db.js')
const userRouter=require('./routers/userRouter.js')
const homeRouter=require('./routers/homeRouter.js')
const analyticsRouter=require('./routers/analyticsRouter.js')

const app=express()
const port=process.env.PORT||5000
app.use(express.json())
app.use('/user', userRouter)
app.use('/analytics', analyticsRouter)
app.use('/home', homeRouter)


app.listen(port,()=>{
    console.log('Server is up on the port '+port+" !")
})