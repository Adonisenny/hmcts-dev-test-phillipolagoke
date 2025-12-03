import cors from 'cors'
import mongoose from 'mongoose';
import { connectDB } from './db.js';
import express from 'express'
import taskRoutes from './routes/taskRoutes.js'





const app = express()
const PORT = process.env.PORT || 3000

//middleware

app.use(cors());
app.use(express.json())

//Routes
app.use('/api',taskRoutes)

app.get('/', (req,res)=>{
res.json({message:'backend is running'})
})
if(process.env.NODE_ENV !== 'test'){
    connectDB().then(()=> {
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`)
        })
    })
}
export default app;