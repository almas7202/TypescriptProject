import { Request,Response, json } from "express";
import DocterModel from '../models/docter'
import department from "../models/department";
export const createDocter = async(req:Request,res:Response)=>{
    const {docter_id,docter_name,gender,qualification,designation,dept_id} = req.body
    const docter = await DocterModel.create({
        docter_id,
        docter_name,
        gender,
        qualification,
        designation,
        dept_id,
    })
    if(docter){
        res.json({"message":"Docter Record Insert...!"})
    }else{
        res.status(500).send("Something Wrong")
    }
}

export const getDocter = async(req:Request,res:Response)=>{
    const docterlist = await DocterModel.find()
    if(docterlist){
        res.send(JSON.stringify(docterlist))
    }else{
        res.status(404).send("Docter List Not Found")
    }
}

export const deleteDocter = async(req:Request,res:Response)=>{
    const id = req.params.id
    const docter = await DocterModel.deleteOne({docter_id : id })
    if(docter){
        res.json({"message":"Docter Delete Succesfully"})
    }else{
        res.status(404).send('Not Found')
    }
}

export const updateDocter = async(req:Request,res:Response)=>{
    const id = req.params.id
    console.log('Docter Id',id);
    
    const docterupdate = await DocterModel.updateOne({docter_id:id},{
        $set :{
            "docter_name":req.body.docter_name,
            "gender":req.body.gender ,
            "qualification":req.body.qualification,
            "designation":req.body.designation,
            "dept_id":req.body.dept_id
        }
    })
    console.log(docterupdate);
    
    if(docterupdate){
        res.json({"message":"Update Succesfully"})
    }else{
        res.status(404).send("Record Not Found")
    }
}