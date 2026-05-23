import React, { } from 'react'
import { useLoaderData } from 'react-router-dom';


const Contact = () => {

  const x=useLoaderData();
 
  return (
    <div className='grid grid-cols-3 grid-rows-3 shadow-2xl'>
    {
      x.map((item) => (
        <div key={item.id} className='border p-4 m-2 rounded- items-center grid-cols-3 grid-rows-3 shadow-2xl'>
          <div >

            <h2 className='text-xl font-bold'>{item.name}</h2>
          <p className='bg-blue-600'>{item.email}</p>
          <p className='bg-amber-500'>{item.phone}</p>
          <p className='bg-cyan-500'>{item.website}</p>
          <p className='bg-fuchsia-400'>{item.city}</p>
          </div>
          
        </div>
      ))
    }


    </div>
  )
}

export default Contact