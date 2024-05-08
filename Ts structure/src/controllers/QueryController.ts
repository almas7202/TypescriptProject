import express from 'express';
import { Request, Response } from 'express';
import PatientModel from '../models/patient';
import DoctorModel from '../models/docter';

export const fetchReport = async (req: Request, res: Response) => {
  try {
    const patientsWithDoctorName = await PatientModel.find()
    .populate({path:'assitance_id', select : "assitance_name"}); // Adjusted the select field
    res.send(JSON.stringify(patientsWithDoctorName));
  } catch (error) {
    throw error;
  }
};
