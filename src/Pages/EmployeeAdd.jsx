import React, { useEffect, useState } from 'react'
import { createEmployees, getEmployee, updateEmployee } from './services'
import { useNavigate, useParams } from 'react-router-dom';


const EmployeeAdd = () => {

  const [firstName, setFirstName]=useState('')
  const [lastName, setLastName]=useState('')
  const [email, setEmail]=useState('')

  const{ id } =useParams();
  const [errors, setError] = useState({
    firstName:'',
    lastName:'',
    email:''}
  )

  const navigator = useNavigate();

  useEffect(()=> {
    if(id){
      getEmployee(id).then((response)=>{
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setEmail(response.data.email)
      }).catch(error => {
        console.error(error);
      })
    }

  },[id])

  function handlefirstName(e){
    setFirstName((e.target.value))
  }
  function handlelastName(e){
    setLastName((e.target.value))
  }
  function handleEmail(e){
    setEmail((e.target.value))
  }

  function saveOrUpdateEmployee(e){
    e.preventDefault();

    if(validateFrom()){
      const employee = {firstName , lastName , email}
    console.log(employee);

    if(id){
      updateEmployee(id,employee).then((response)=>{
        console.log(response.data)
        navigator('/employee')
      }).catch(error=>{
        console.log(error);
      })

    }
    else{
      createEmployees(employee).then((response) =>{
      console.log(response.data);
      navigator('/employee')
    }).catch(error=> {
      console.log(error);
    })
    }
  }
}

  function validateFrom(){
    let valid =true;
    const errorsCopy ={...errors}
    if (firstName.trim()){
      errorsCopy.firstName='';
    }
    else{
      errorsCopy.firstName='FirstName is Required'
      valid=false;
    }
     if (lastName.trim()){
      errorsCopy.lastName='';
    }
    else{
      errorsCopy.lastName='LastName is Required'
      valid=false;
    }
     if (email.trim()){
      errorsCopy.email='';
    }
    else{
      errorsCopy.email='Email is Required'
      valid=false;
    }
    setError(errorsCopy);
    return valid;

  }

  function pageTitle(){
    if(id){
      return <h2 className="text-center">Update Employee</h2>
    }
    else{
      return <h2 className="text-center">Add Employee</h2>
    }
  }
  return (
    <div>
      <div className='container mt-2'>
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            {
              pageTitle()
            }
            <div className="card-body">
              <div className="form-group mb-2">
                <label className='form-label'>First Name : </label>
                <input type="text" 
                placeholder='First Name' 
                name='firstName' 
                value={firstName} 
                className={`form-control ${errors.firstName ? 'is-invalid':''}`} 
                onChange={handlefirstName} />

                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}


                <label className='form-label'>Last Name : </label>
                <input type="text" 
                placeholder='Last Name' 
                name='lastName' 
                value={lastName} 
                className={`form-control ${errors.lastName ? 'is-invalid':''}`} 
                onChange={handlelastName} />

                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}


                <label className='form-label'>Email : </label>
                <input type="text" 
                placeholder='Email' 
                name='email' 
                value={email} 
                className={`form-control ${errors.email ? 'is-invalid':''}`}  
                onChange={handleEmail} />

                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}


              </div>
              <button className='btn btn-success' onClick={saveOrUpdateEmployee}> Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default EmployeeAdd;