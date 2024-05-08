import {createpatient,updatePatient,deletePatient,getPatient} from '../controllers/PatientController'
import express from 'express'

const routes = express.Router()

routes.route('/newPatient').post(createpatient)
routes.route('/getPatient').get(getPatient)
routes.route('/deletePatient/:id').delete(deletePatient)
routes.route('/updatePatient/:id').put(updatePatient)
export default routes