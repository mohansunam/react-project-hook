import { faker } from '@faker-js/faker';
import { Button, Input } from '@material-tailwind/react';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import DailogBox from './components/DailogBox';

const Home = () => {
  const [users, setUser]= useState([]);
  const [show, setShow]= useState(false);
  const [index, setIndex]= useState(0)
  const formik = useFormik({
    initialValues:{
      email:''
    },
    onSubmit: (val)=>{
      setUser((pre)=>[...pre, faker.internet.email()]);
    }
  });
  const toggle =()=>{{
    setShow((pre)=> !pre);}}
  const removeMail =()=>{
    users.splice(index, 1);
    setUser((prev)=>[...prev])

  }

   

  return (
    <div className='p-8 w-[]' >
      <form className=' space-y-3' onSubmit={formik.handleSubmit}>
        <Input 
        name='email'
        onChange={formik.handleChange}
        label='Email'
        value={formik.values.email}
      
        placeholder='@gamil.com'
        /> 
        <Button type='submit'>Submit</Button>
        {users.map((update, i)=>{
          return <div key={i} className='flex gap-3 justify-between'>
            <h1>{update}</h1>
            <Button onClick={setShow} size='sm'>Delete</Button>
            
          </div>
        })}
      </form>
      <DailogBox show={show} setShow={toggle} removeMail={removeMail} />
   
      
    </div>
  )
}

export default Home
