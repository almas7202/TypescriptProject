import express, { Router } from 'express'
import {fetchReport} from '../controllers/QueryController'

const routes = express.Router()

routes.route('/fetchReport').get(fetchReport)

export default routes
