import  { Request,Response } from "express";
import AssitanceModel from '../models/assitance'


export const createAssitance = async(req:Request,res:Response)=>{
    const {assitance_id,name,gender,dept_id} = req.body
    const assitance = await AssitanceModel.create({
        assitance_id,
        name,
        gender,
        dept_id
    })
    if(assitance){
        res.json({"message":"Assitance Record Insert"})
    }else{
        res.status(500).send("Something Wrong")
    }
}

export const getAssitance = async(req:Request,res:Response)=>{
    const assitanceList = await AssitanceModel.find()
    if(assitanceList){
        res.send(JSON.stringify(assitanceList))
    }else{
        res.status(404).send("Assitance List not Found")
    }
}

export const deleteAssitance = async(req:Request,res:Response) =>{
    const id = req.params.id
    const assitance = await AssitanceModel.deleteOne({assitance_id : id})
    if(assitance){
        res.json({"message":"Assitance Deleted Succesfully"})
    }else{
        res.status(404).send("Not Found")
    }
}

export const updateAssitance = async(req:Request,res:Response) =>{
    const id = req.params.id
    const assitanceupdate = await AssitanceModel.updateOne({assitance_id:id},{
        $set:{
            "assitance_id":req.body.assitance_id,
            "name":req.body.name,
            "gender":req.body.gender,
            "dept_id":req.body.dept_id
        }
    })
    if(assitanceupdate){
        res.json({"message":"Update Succesfully"})
    }else{
        res.status(404).send("Not Found")
    }
}