import { Button, Input } from '@material-tailwind/react';
import { useFormik } from 'formik'
import React, { useState } from 'react'

const App = () => {
  const [user, setUser]= useState([])
  const formik = useFormik({
    initialValues:{
      email:''
    },
    onSubmit: (val)=>{
      setUser((pre)=>[...pre, val.email]);
    }
  });
  console.log(user)
  return (
    <div className='p-8 space-y-3' >
      <form onSubmit={formik.handleSubmit}>
        <Input 
        name='email'
        onChange={formik.handleChange}
        label='Email'
        value={formik.values.email}
      
        placeholder='@gamil.com'
        /> 
        <Button type='submit'>Submit</Button>
      </form>
   
      
    </div>
  )
}

export default App
