import React from 'react'
import { useRef } from 'react'
import useFilterSelection from '@/lib/states/selectedFilters'

interface filtermenu {
    text:string,
}

function Filtermenu({text}:filtermenu) {
    const filterRef = useRef<HTMLInputElement>(null);
    const {addFilter,removeFilter} = useFilterSelection();

    const handleCheck = () => {
        if (filterRef.current?.checked) {
          addFilter(filterRef.current?.name)
        }
        if (!filterRef.current?.checked&&filterRef.current?.name) {
          removeFilter(filterRef.current?.name)
        }

      };

  return (
    <div  className='flex min-w-40 flexSide gap-x-2'>
    <input onChange={handleCheck} ref={filterRef} name={text} className='rounded-full w-4 h-4' type='checkbox' />
    <span>{text}</span>
</div>
  )
}

export default Filtermenu
