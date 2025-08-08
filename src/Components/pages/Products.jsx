import React, { createContext } from 'react'

export const gite = createContext();

const Products = () => {
  const [x, setX] = React.useState("");
  const items = ["apple", "banana", "mango", "orange", "grapes","apple", "banana", "mango", "orange", "grapes","apple", "banana", "mango", "orange", "grapes"];
  const app = items.filter((item) => item.toLowerCase().includes(x.toLowerCase()));
  return (
    <div>
      <h1 className='text-3xl text-center mt-10'>Products</h1>
      <div className='flex justify-center mt-10 '>
        < input type="text" placeholder='Search'  className='border border-gray-300 p-2 rounded-md' value={x} onChange={(e) => setX(e.target.value)} />
      </div>
      <div className='mt-10 flex justify-center'>
        <ul className='list-disc'>
          {app.length === 0 ? (
            <li className='text-xl bg-amber-600'>No items found</li>
          ) : (
            app.map((item, index) => (
              <li key={index} className='text-xl '>{item}</li>
            ))
          )}
        </ul>
      </div>


      <gite.Provider value={x }>
        <div className='mt-10'> 
          {/* You can put any children/components here that need access to the context */}
        </div>
      </gite.Provider>
    </div>
  )
}

export default Products