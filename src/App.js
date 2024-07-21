import { Button, Input } from '@material-tailwind/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData]= useState();
  const getData = async() =>{
    try {
      const response = await axios.get('https://dummyjson.com/recipes');
      setData(response.data);

    } catch(err){};
  }
  useEffect(() =>{
    getData();
  }, [])
  return (
    <div>
      {data && <div className='grid grid-cols-6 gap-y-4 gap-x-2'>
        {data.recipes.map((product)=>{
          return <div className='w-[100%] ' key={product.id}>
             <img src={product.image} alt="" />
             <h1 className='font-bold'>{product.name}</h1>
             <h1>{product.ingredients.map((item, i)=>{
              return <p key={i}>{`${i+1}.`}{item}</p>
             })}</h1>
          </div>
        })
        }

      </div>
      }
      
    </div>
  )
}

export default App




{/* <div className='w-[100%] '>
      { data && <div className=' grid grid-cols-6 gap-x-2 gap-y-2'>
        {data.recipes.map((recipe)=>{
          return <div key={recipe.id}>
            <img src={recipe.image} alt="" />
            <h1>{recipe.ingredients.map((ing, i)=> {
              return <p key={i}> {`${i+1}.`}{ing}</p>

            })}</h1>

          </div>
        })}
      </div>

      }
    </div> */}
   


{/* <div className='p-8  flex justify-end gap-3'> 
<form className=''>
<Input className='w-[300px] text-red-500' placeholder='Movie Name' type="text" />

</form>

  <Button className='p-2 '>Search movie</Button>
</div> */}
