import mongoose from "mongoose";
import { Patient } from "../Interfade/PatientStruture";
import DoctorModel from "./docter";
import assitance from "./assitance";
import department from "./department";
const PatientSchema = new mongoose.Schema<Patient>({
    patient_id:{
        type:Number,
        required:[true,'Please Enter Patient id'],
        unique:true
    },
    name:{
        type:String,
        required:[true,"Please Enter Name"],
        lowercase:true,
        trim:true
    },
    gender:{
        type:String,
        enum:['male','female','other'],
        required:[true,'gender is Required']
    },
    age:{
        type:Number,
        required:[true,'please enter your age']
    },
    medicine:{
        type:[String],
        require:[true,'Please Enter Medicine You take to patient'],
        lowercase:true,
        trim:true
    },
    dept_id:{
        type:Number,
        ref:'department',
        required:[true,'Department is Required'],
        validate:{
            validator: async function (deptId:any): Promise<boolean> {
                const  department = await mongoose.models.department.findOne({dept_id:deptId})
                return !!department
            },
            message:"Department With this id does not exist"
        }
    },
    docter_id: {
        type: Number,
        ref: 'doctor', // Corrected the reference to 'doctor'
        required: [true, 'doctor id is Required'],
        validate: {
            validator: async function (docterId: any): Promise<boolean> {
                const doc = await DoctorModel.findOne({ docter_id: docterId }); // Use DoctorModel instead of 'docter'
                return !!doc;
            },
            message: 'Doctor with this id does not exist' // Corrected the message
        }
    },
    assitance_id:{
        type:Number,
        ref:'assitance',
        required:[true,'Assitance id is Required'],
        validate:{
            validator: async function (ass_id:any) : Promise<boolean> {
                const assitance = await mongoose.models.assitance.findOne({assitance_id : ass_id})
                return !!assitance
            },
            message: 'Assitance With this is does not exist'
        }
    }

})

export default mongoose.model('patient',PatientSchema)