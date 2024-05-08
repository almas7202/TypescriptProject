import DepartmentModel from "../models/department";
import { Request,Response } from "express";
import mongoose from "mongoose";
import department from "../models/department";

export const createDepartment = async(req:Request,res:Response)=>{
    const {dept_id,dept_name} = req.body
    const department =  await DepartmentModel.create({
        dept_id,
        dept_name
    })
    if(department){
        res.json({"message":"Department Create Succesfully...!"})
    }else{
        res.status(500).send("something wrong")
    }
}


export const getDepartment = async(req:Request,res:Response)=>{
    let department = await DepartmentModel.find()
    if(!department){
        res.json({"message":"Department Is not Register yet"})
    }else{
        res.send(JSON.stringify(department))
    }
}

export const deleteDepartment = async(req:Request,res:Response)=>{
    let id = req.params.id
    console.log(id);
    const department = await DepartmentModel.deleteOne({dept_id : id})
    console.log(department);
    
    if(!department){
        res.status(404).send("Student Not Found")
    }else{
        res.json({"message":"Student delete succesfully"})
    }
}

export const updateDepartment = async(req:Request,res:Response)=>{
    const id = req.params.id
    const department = await DepartmentModel.updateOne({dept_id : id },{
        $set :{
            "dept_name" : req.body.dept_name
        }
    })
    if(department){
        res.json({"message":"Department Name is Updated"})
    }else{
        res.status(204).send("Something Wrong Or Id Does not Exist ")
    }

}