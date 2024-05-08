import { Request,Response } from "express";
import PatientModel from '../models/patient'

export const createpatient = async(req:Request,res:Response)=>{
    const {patient_id,name,gender,age,medicine,dept_id,docter_id,assitance_id} = req.body
    const  patient = await PatientModel.create({
        patient_id,
        name,
        gender,
        age,
        medicine,
        dept_id,
        docter_id,
        assitance_id
    })
    if(patient){
        res.json({"message":"Patient Succesfully Insert"})
    }else{
        res.status(500).send("Something Wrong")
    }
}

export const getPatient = async(req:Request,res:Response)=>{
    const patientlist = await PatientModel.find()
    if(patientlist){
        res.send(JSON.stringify(patientlist))
    }else{
        res.status(404).send("Patient List not Found")
    }
}

export const deletePatient = async(req:Request,res:Response) =>{
    const id = req.params.id
    console.log(id);
    
    const patient = await PatientModel.deleteOne({patient_id:id})
    console.log(patient);

    if(patient.acknowledged){
        res.json({"message":"Patient Deleted Succesfully"})
    }else{
        res.status(404).send("Not Found")
    }
}

export const updatePatient = async(req:Request,res:Response) =>{
    const id = req.params.id
    console.log(id);
    
    const patientUpdate = await PatientModel.updateOne({patient_id:id},{
        $set:{
            "name":req.body.name,
            "gender":req.body.gender,
            "age":req.body.age,
            "medicine":req.body.medicine,
            "dept_id":req.body.dept_id,
            "docter_id":req.body.docter_id,
            "assitance_id":req.body.assitance_id
        }
    })
    console.log(patientUpdate);
    if(patientUpdate.acknowledged){
        res.json({"message":"Update Succesfully"})
    }else{
        res.status(404).send("Not Found")
    }
}