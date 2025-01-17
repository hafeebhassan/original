import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import axios from 'axios';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const DataTable = () => {
  const navigate=useNavigate
  const [data, setData] = useState([]);
  axios.get("http://localhost:3004/view").then((res) => {
    console.log(res.data);
    setData(res.data);
  });
  const delValue = (id) => {
    axios.delete("http://localhost:3004/remove/" + id)
      .then((res) => {
        alert(res.data.message)
        window.location.reload()
      });
  }
  const updateValue = (val) => {
    console.log("up clicked");
    navigate('/addemp',{state:{val}})
  }
 
  return (
    <div>
      <br />
      <br />
      <h1>Employee Table</h1><br /><br />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((val) => {
            return (
              <TableRow>
                <TableCell>{val.Name}</TableCell>
                <TableCell>{val.Age}</TableCell>
                <TableCell>{val.Department}</TableCell>
                <TableCell>{val.Salary}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "white", color: "black" }}
                    onClick={() => {
                      delValue(val._id);
                    }}
                  >
                    Delete
                  </Button>
                &nbsp;&nbsp;&nbsp;
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "black", color: "white" }}
                    onClick={() => {
                      updateValue(val);
                    }}
                  >
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable