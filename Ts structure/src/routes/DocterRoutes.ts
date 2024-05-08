import { createDocter, deleteDocter, getDocter, updateDocter } from "../controllers/DocterController";
import express from 'express'

const routes = express.Router()

routes.route('/newDocter').post(createDocter)
routes.route('/getDocter').get(getDocter)
routes.route('/deleteDocter/:id').delete(deleteDocter)
routes.route('/updateDocter/:id').put(updateDocter)

export default routes