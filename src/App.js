import React, { useState , useEffect} from 'react'
import {AppBar, Box, Toolbar , Typography } from '@mui/material'
import Form from './component/Form';
import './App.css'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  let [loading, setLoading] = useState(true);

  
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      },5000)
    })
  

  return (
    <>
    {
      loading?
        <div className="preloader">
          <ClimbingBoxLoader color={'orange'} loading={loading} size={30} />
        </div>
      :
      <div>
        <AppBar position='static' sx={{background : 'linear-gradient(90deg, rgba(0,2,28,1) 0%, rgba(10,18,88,1) 54%, rgba(0,104,255,1) 100%)'}}>
      <Toolbar>
      <Typography variant="h6">Alpine</Typography>
          <Box display='flex' marginLeft='auto'>
          </Box>
      </Toolbar>
    </AppBar>
    <div className="container">
    <Form/>
    </div>
      </div>
      
    }
      
      
      
    </>
  );
}

export default App;

