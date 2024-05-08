import express, { Router } from 'express'
import { createDepartment,getDepartment,deleteDepartment, updateDepartment } from '../controllers/DepartmentController'

const routes = express.Router()

routes.route('/newDept').post(createDepartment)
routes.route('/getDept').get(getDepartment)
routes.route('/deleteDept/:id').delete(deleteDepartment)
routes.route('/updateDept/:id').put(updateDepartment)
export default routes