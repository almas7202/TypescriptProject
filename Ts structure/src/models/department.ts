import { Department } from "../Interfade/DepartmentStruture";
import mongoose from "mongoose";

const DeptSchema = new mongoose.Schema<Department>({
    dept_id:{
        type:Number,
        required:[true,'Department id Can not be null'],
        unique:true
    },
    dept_name:{
        type:String,
        required:[true,'Please Enter Department Name'],
        lowercase:true,
        trim:true
    }
})


export default mongoose.model('department',DeptSchema)    