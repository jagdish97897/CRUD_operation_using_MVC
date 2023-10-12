
const express = require('express');

const employeeRouter = express.Router();

const {postEmployee,getEmployee,updateEmployee,deleteEmployee} = require('../../Controller/Employee/Employee')

employeeRouter.post('/addemployee',postEmployee)
employeeRouter.get('/viewemployee',getEmployee)
employeeRouter.patch('/updateemployee/:Emp_id',updateEmployee)
employeeRouter.delete('/deleteemployee/:Emp_id',deleteEmployee)

module.exports = employeeRouter;
