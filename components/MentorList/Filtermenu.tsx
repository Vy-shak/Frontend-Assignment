import React, { useEffect } from 'react'
import { useRef } from 'react'
import useFilterSelection from '@/lib/states/selectedFilters'

interface filtermenu {
    text: string,
}

function Filtermenu({ text }: filtermenu) {
    const filterRef = useRef<HTMLInputElement>(null);
    const { addFilter, removeFilter, selectedFilter } = useFilterSelection();

    useEffect(() => {
        if (selectedFilter && selectedFilter.includes(text)) {
            if (filterRef.current) {
                filterRef.current.checked = true;
            }
        } else {
            if (filterRef.current) {
                filterRef.current.checked = false;
            }
        }
    }, []);

    const handleCheck = () => {
        const filter = filterRef.current?.name;
        if (!filter) {
            return
        };
        if (filterRef.current?.checked && !selectedFilter.includes(filter)) {
            addFilter(filter)
        }
        if (!filterRef.current?.checked && filterRef.current?.name) {
            removeFilter(filter)
        }

    };

    return (
        <div className='flex min-w-40 flexSide gap-x-2'>
            <input onChange={handleCheck} ref={filterRef} name={text} className='rounded-full w-4 h-4' type='checkbox' />
            <span>{text}</span>
        </div>
    )
}

export default Filtermenu
