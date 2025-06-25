import React,{useEffect, useState} from "react";
import { deleteEmployee, listEmployees } from "./services";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent=()=>{
const[Employees,setEmployees]=useState([])
const navigator =useNavigate();

useEffect(() => {
    GetAllEmployee();

},[]
)
function GetAllEmployee(){
    listEmployees().then((response)=>{
        setEmployees(response.data);
    }).catch(error => {
        console.error(error);
    });
}
function addNewEmployee(){
    navigator("/add-employee")
}

function updateEmployee(id){
    navigator(`/update-employee/${id}`)
}

function removeEmployee(id){
    console.log(id);
    deleteEmployee(id).then((response)=>{
        GetAllEmployee();
        console.log(response.data)
    }).catch(error=>{
        console.error(error);
    })
}
    return(
        <div className="container">
            <h2>List of Employees</h2>
            <button className="btn btn-primary mb-2" onClick={addNewEmployee}> Add</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className="btn btn-info" onClick={()=> updateEmployee(employee.id)}>Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=> removeEmployee(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployeeComponent;