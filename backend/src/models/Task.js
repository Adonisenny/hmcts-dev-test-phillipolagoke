import mongoose from "mongoose"

const taskschema= new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String
        },
        status:{
            type:String,
            enum:['NEW','IN_PROGRESS','DONE'],
            default:'NEW'
        },
        duedate:{type:Date}
    },
    {timestamps:true}
);

export const Task= mongoose.model('Task', taskschema)