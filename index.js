const express = require('express');
const app = express();
app.use(express.json());

const employeeRouter = require('./Routes/EmployeeRoute/EmployeeRoute');

app.use('/', employeeRouter);


const port=5000;
app.listen(port,()=>{
    console.log(`server is running on ${port} port`)
});
