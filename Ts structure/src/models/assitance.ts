import { Assitance } from "../Interfade/AssitanceStruture";
import mongoose from "mongoose";

const AssitanceSchema = new mongoose.Schema<Assitance>({
    assitance_id:{
        type:Number,
        required:[true,'assitance id can not be empty'],
        unique:true
    },
    name:{
        type:String,
        required:[true,'Please Enter Name'],
        lowercase:true,
        trim:true
    },
    gender:{
        type:String,
        enum:['male','female','other'],
        required:[true,'Gender is required'],
        trim:true
    },
    dept_id:{
        type:Number,
        required:[true,'Department id can not be null'],
        ref:'department', // Referencing the Department model
        validate: {
            validator: async function(deptId: any): Promise<boolean> {
                const department = await mongoose.models.department.findOne({ dept_id: deptId });
                return !!department; // Return true if department exists, false otherwise
            },
            message: 'Department with this ID does not exist'
        }
    }
})

export default mongoose.model('assitance',AssitanceSchema)