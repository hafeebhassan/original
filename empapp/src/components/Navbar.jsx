import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
        <AppBar position='sticky'style={{backgroundColor:"black"}}>
            <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Employees App</Typography>
          <Link to="/addemp">
          <Button variant='contained'style={{backgroundColor:"white",color:"black",fontFamily:"initial"}}>ADD</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/datatable">
          <Button variant='contained'style={{backgroundColor:"white",color:"black",fontFamily:"initial"}}>VIEW</Button></Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar