import { Task } from "../models/Task.js"






const createtask = async(req,res)=> {
try {
    const{title,description,status,duedate}= req.body
    if(!title){
        return res.status(400).json({message:'title is required'})
    }



    const task = await Task.create({
        title,
        description,
        status,
        duedate
    })
    return res.status(201).json({message: 'task successfully created', task})

} catch (error) {
    console.log('error creating tasks:', error)
    return res.status(400).json({message:'internal server error'})
}


}


export default createtask