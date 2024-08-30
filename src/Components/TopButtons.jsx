import React from 'react'

const TopButtons = ({setQuery}) => {

  const cities  = [
    
    {
     id:1,
     name: "Delhi", 
         
    },
    {
     id:2,
     name: "Bhubaneswar", 
         
    },
    {
     id:3,
     name: "Mumbai", 
         
    },
    {
     id:4,
     name: "Kolkata", 
         
    },
    {
     id:5,
     name: "Bangalore", 
         
    },

]
 

  return (
    <div className="flex items-center justify-around mb-8  xl:my-6">
      {cities.map((city) =>{
       return <button key={city.id} className=" md:text-lg md:font-medium hover:bg-gray-700/20 md:px-3 md:py-2 p-2 text-xs mt-7 xl:mt-0 rounded-md  transition ease-in " onClick={() =>{
        setQuery({q:city.name})
       }}>
          {city.name}
        </button>
      })}


    </div>
  );
}

export default TopButtons
