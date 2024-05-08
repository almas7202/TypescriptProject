import {createAssitance,deleteAssitance,updateAssitance,getAssitance} from '../controllers/AssitanceController'
import express from 'express'

const routes = express.Router()

routes.route('/newAssitance').post(createAssitance)
routes.route('/getAssitance').get(getAssitance)
routes.route('/updateAssitance/:id').put(updateAssitance)
routes.route('/deleteAssitance/:id').delete(deleteAssitance)

export default routes