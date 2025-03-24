import React from 'react'
import { Input } from '../ui/input'
import Filtercard from './Filtercard'

const filter = [
    {
      id: 1,
      type: "Role",
    },
    {
      id: 2,
      type: "Company",
    },
    {
      id: 3,
      type: "Slot",
    },
    {
      id: 4,
      type: "Rating",
    },
  ];

function SearchBar() {
  return (
    <section className='w-full flex py-5 justify-between items-center bg-white'>
        <div className='w-fit h-fit'>
        <input className='w-72 px-6 rounded py-1 placeholder:text-xs placeholder:font-medium placeholder:text-UIslate-400 outline-1 outline-UIslate-400 bg-UIslate-200' placeholder='Search by name'/>
        </div>
        <div className='w-fit flexCenter gap-x-4 h-fit'>
            {filter.map((item)=>(
                <Filtercard key={item.id} type={item.type} />
            ))}
        </div>
    </section>
  )
}

export default SearchBar
