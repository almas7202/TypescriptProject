import mongoose, { Schema } from "mongoose";
import { Docter } from "../Interfade/DocterStrture";

const { model } = mongoose;

const DocterSchema:Schema = new Schema({
    docter_id:{
        type:Number,
        required:[true,'Doctor Id Can not be null'],
        unique:true
    },
    docter_name:{
        type:String,
        required:[true,'Please Enter Doctor Name'],
        lowercase:true,
        trim:true
    },
    gender:{
        type:String,
        required:[true,'Please Enter Gender'],
        trim:true,
        enum:['male','female','other'],
        lowercase:true  
    },
    qualification:{
        type:String,
        required:[true,'Please Enter Qualification'],
        enum:['MBBS','MS','MD','BAMS','BHMS','BUMS'],
    },
    designation:{
        type:String,
        required:[true,'Enter Designation'],
        enum:['oncologist','gynecologist','neurologist','endocrinologist','surgeon'],
        lowercase:true
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
});

export default model('doctor', DocterSchema);
