import express from 'express'
import mongoose from 'mongoose'
import app from './main'

mongoose.connect('mongodb://localhost:27017/HospitalManagement')
    .then(()=>console.log('Succesfully Connnect to Database'))
    .catch((err)=>console.log(err))


app.listen(3000,()=>{
    console.log("Application Running on 3000 PORT");
})