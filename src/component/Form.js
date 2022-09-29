import React, { useState , useEffect} from 'react'
import './form.css';
import {Card ,CardContent , Grid, TextField ,Button} from '@material-ui/core'
import Confetti from 'react-confetti'

const Form = () => {
    const initialFValues = {
        firstName : '',
        lastName : '',
        email : '',
        mobile : '',
        city : ''
    }
    
    const [values, setValues] = useState(initialFValues);
    const [error, setError] = useState({});
    const [isSubmit, setSubmit] = useState(false);
    const [confiti, setConfiti] = useState(false);

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetForm = () => {
        setValues(initialFValues);
        setError({})
        setSubmit(false)
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        setError(validate(values))
        setSubmit(true)
        if(Object.keys(error).length===0 && isSubmit){
            setConfiti(true)
        }
    }

    

    useEffect(()=>{
        
        if(Object.keys(error).length===0 && isSubmit){
            setConfiti(true)
            console.log(values)
        }
    })

    //Validate
    const validate=(value)=>{
        const errors={}
         // eslint-disable-next-line
        const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var mobile = /^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4}/;
        if(!value.firstName){
            errors.firstName='First Name Required'
        }
        if(!value.lastName){
            errors.lastName='Last Name Required'
        }
        if(!(value.email).match(regex)){
            errors.email='email is Required'
        }
        if(!(value.mobile.match(mobile))){
            errors.mobile='Mobile is Required'
        }
        if(!value.city){
            errors.city='city is Required'
        }
        return errors
    }

  return (
    <>
    {
        confiti?<Confetti width={window.innerWidth } height={window.innerHeight}/>:
        <form onSubmit={handleSubmit}>
    <Card style={{maxWidth:450 , margin:'5% auto',padding:''}}>
        <CardContent>
            <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                    <TextField
                    label='First Name'
                    placeholder='Enter Your First name'
                    variant='outlined'
                    name='firstName'
                    value={values.firstName}
                    onChange={handleInputChange}
                    />
                    <span className='formError'>{error.firstName}</span>
                </Grid>
                <Grid xs={12} sm={6} item>
                    <TextField
                    label='Last Name'
                    placeholder='Enter Your Last name'
                    variant='outlined'
                    name='lastName'
                    fullWidth
                    value={values.lastName}
                    onChange={handleInputChange}
                    
                    />
                    <span className='formError'>{error.lastName}</span>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                    label='Email'
                    name='email'
                    placeholder='Enter Your Email'
                    variant='outlined'
                    fullWidth
                    value={values.email}
                    onChange={handleInputChange}
                    
                    />
                    <span className='formError'>{error.email}</span>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                    label='Phone Number'
                    type='phone'
                    name='mobile'
                    placeholder='Enter Your Phone Number'
                    variant='outlined'
                    fullWidth
                    value={values.mobile}
                    onChange={handleInputChange}
                   
                    />
                    <span className='formError'>{error.mobile}</span>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                    label='City'
                    name='city'
                    placeholder='City Name'
                    variant='outlined'
                    fullWidth
                    value={values.city}
                    onChange={handleInputChange}
                    />
                    <span className='formError'>{error.city}</span>
                </Grid>
                <Grid xs={6} sm={6} item>
                    <Button type ='submit' variant='contained' color='primary' fullWidth>Submit</Button>
                </Grid>
                <Grid xs={6} sm={6} item>
                    <Button variant='contained'  onClick={resetForm} fullWidth>Reset</Button>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    </form>
    }
    </>
  )
}

export default Form