const connection = require('../../Model/DbConnect');

const postEmployee = async (req,res)=>{
   try{ 
    let userData = req.body;
    console.log(userData);
    let sqlQuery = "INSERT INTO employee SET ?";

    await connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }

    });
}catch(error){
    res.send(error.sqlMessage);
}
}

const getEmployee = async (req,res)=>{
    try{
    let userData = req.body;
    console.log(userData);
    let sqlQuery = "SELECT * FROM employee";

    await connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }

    });
}catch(error){
    res.send(error.sqlMessage);
}

}

const updateEmployee = async (req,res)=>{
    try{
    let userData = [req.body.Emp_name,req.body.Dept,req.body.Salary,req.params.Emp_id];
    let sqlQuery = "UPDATE employee SET Emp_name=?,Dept=?,Salary=? WHERE Emp_id = ?";


   await connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }

    });
}catch(error){
    res.send(error.sqlMessage);
}
}

const deleteEmployee = async (req,res)=>{
    try{
    let userData = req.params.Emp_id;
    let sqlQuery = "DELETE FROM employee WHERE Emp_id=?";

   await connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }

    });
}catch(error){
    res.send(error.sqlMessage)
}
}


module.exports={postEmployee,getEmployee,updateEmployee,deleteEmployee};
