import React, { useState } from 'react'
import {Button, Container, TextField}from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
const AddEmp = (props) => {
  var [input, setinput] = useState({ Name: "", Age: "", Department: "", Salary: "" })
  var location=useLocation()
  var navigate = useNavigate()
  console.log("loc",location.state)
  

  const inputHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }
  const addHandler = (e) => {
    console.log("clicked");
    if (location.state !== null) {
      axios.put("http://localhost:3004/update/" + location.state.val._id, inputs)
        .then((res) => {
          alert(res.data.message)
          navigate('/view')
        })
    } else {
    
      axios.post("http://localhost:3004/add", input)
        .then((res) => {
          alert(res.data.message)
          console.log(res)
          navigate('/view')

        })
        .catch((err) => {
          console.log(err);
      })
    }
  }
  useEffect(() => {
    if (location.state !== null) {
      setinput({
        ...input,
        Name: location.state.val.Name,
        Age: location.state.val.Age,
        Department: location.state.val.Department,
        Salary: location.state.val.Salary
      })
    }
  },[])
  return (
    <div>
        <br /><br /><br />
      <Container maxWidth="sm" style={{ backgroundColor: "whitesmoke", borderRadius:"100px"}}>
        <br /><br />
        <h1>Application Form</h1>
        <br /><br />
        <TextField variant='outlined'label="Enter name"name="Name"value={input.Name}onChange={inputHandler}/>
        <br /><br />
        <TextField variant='outlined' label="Enter age" type='Number' name="Age" value={input.Age} onChange={inputHandler} />
        <br /><br />
        <TextField variant='outlined' label="Enter Department" name="Department" value={input.Department} onChange={inputHandler} />
        <br /><br />
        <TextField variant='outlined' label="Enter Salary" name="Salary" value={input.Salary} onChange={inputHandler} />
        <br /><br />
        <Button variant='contained'style={{backgroundColor:"black"}}onClick={addHandler}>Add Employee</Button>
        <br /><br /><br />
        </Container>
    </div>
  )
}

export default AddEmp