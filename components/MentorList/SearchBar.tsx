"use client"
import React, { useState } from 'react'
import {Filtermodal,SearchPopup,Filtercard,FilterPopup} from "../../components/index"
import useFilterStore from '@/lib/states/useFilterpop';
import useFilterModal from '@/lib/states/useFiltermodal';
import Image from 'next/image';
import { SearchIcon } from '../../public/index'
import { useRef } from 'react';
import {SlidersHorizontal} from "lucide-react"
import { filterData } from '@/app/utils/dummyData/filter';

interface menu {
  id: number,
  text: string,
}

function SearchBar() {
  const { filterType } = useFilterStore();
  const searchRef = useRef<HTMLInputElement>(null);
  const {isOpen,toggle} = useFilterModal()
  const [searchOn,setSearchon] = useState(false)
  const [history,Sethistory] = useState<string[]>([]);

  const handleHistory = ()=>{
    if (searchRef.current?.value) {
      const val = searchRef.current?.value;
      searchRef.current.value = ""
      Sethistory((prev)=>[...prev,val])
    }
    setSearchon(false);
  }

  return (
    <section className='w-full flex  justify-between items-center bg-white'>
      <div className='flexStart w-full bg-white'>
        <div className='w-fit py-2 rounded pl-2 flex outline-1 outline-UIslate-400 bg-UIslate-200 justify-start items-center h-fit'>
          <Image  alt='search icon' src={SearchIcon} />
          <input  onBlur={handleHistory}  onFocus={()=>setSearchon(true)} ref={searchRef}  className='w-full pr-6 focus:border-none focus:outline-none focus:ring-0 focus:border-transparent focus-visible:no-underline rounded h-full placeholder:text-xs placeholder:font-normal placeholder:text-UIslate-400 ' placeholder='Search by name' />
        </div>
        {searchOn&&<SearchPopup history={history} />}
      </div>
      <div className='w-fit md:hidden border-2  border-UIslate-300 cursor-pointer bg-white py-2 px-4 rounded-md'>
      <SlidersHorizontal color='#334155' onClick={()=>toggle()} size={20} />
      </div>
      <div className='w-fit hidden md:flex justify-center items-center gap-x-4 h-fit'>
        {filterData.map((item) => (
          <div key={item.id} className='md:flex hidden justify-start items-start gap-y-3 flex-col'>
            <Filtercard type={item.type} />
            {filterType == item.type ? <FilterPopup constant={item.menus} /> : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SearchBar
