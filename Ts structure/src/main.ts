import express from 'express'
import DepartmentRoutes from './routes/DepartmentRoutes'
import DocterRoutes from './routes/DocterRoutes'
import AssitanceRoutes from './routes/AssitanceRoute'
import PatientRouets from './routes/PatientRoutes'
import ReportRoutes from './routes/QueryRoutes'
const app = express()
app.use(express.json())
app.use('/dept',DepartmentRoutes)
app.use('/docter',DocterRoutes)
app.use('/assitance',AssitanceRoutes)
app.use('/Patient',PatientRouets)
app.use('/report',ReportRoutes)
export default app