"use client"
import React, { useState } from 'react'
import Filtercard from './Filtercard'
import FilterPopup from './FilterPopup';
import SearchPopup from './SearchPopup';
import useFilterStore from '@/lib/states/useFilterpop';
import Image from 'next/image';
import { SearchIcon } from '../../public/index'
import { useRef } from 'react';

interface menu {
  id: number,
  text: string,
}

const filter = [
  {
    id: "role",
    type: "Role",
    menus: [
      { id: "se-sde", text: "SE/SDE" },
      { id: "ds-ai-ml", text: "DS/AI/ML" },
      { id: "product-management", text: "Product Management" },
      { id: "project-management", text: "Project Management" },
      { id: "consulting", text: "Consulting" },
      { id: "quantitative-finance", text: "Quantitative Finance" }
    ],
  },
  {
    id: "company",
    type: "Company",
    menus: [
      { id: "faang", text: "FAANG" },
      { id: "startups", text: "Startups" },
      { id: "mncs", text: "MNC’s" },
      { id: "others", text: "Others" }
    ],
  },
  {
    id: "slot",
    type: "Slot",
    menus: [
      { id: "this-week", text: "This week" },
      { id: "next-week", text: "Next week" },
      { id: "anytime", text: "Anytime" }
    ],
  },
  {
    id: "rating",
    type: "Rating",
    menus: [
      { id: "low-to-high", text: "Low to high" },
      { id: "high-to-low", text: "High to low" }
    ],
  },
];

function SearchBar() {
  const { filterType } = useFilterStore();
  const searchRef = useRef<HTMLInputElement>(null);
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
    <section className='w-full flex py-5 justify-between items-center bg-white'>
      <div className='flexStart w-full bg-white'>
        <div className='w-fit flexCenter h-fit'>
          <Image className='relative -right-6' alt='search icon' src={SearchIcon} />
          <input onBlur={handleHistory}  onFocus={()=>setSearchon(true)} ref={searchRef}  className='w-72 px-6 rounded py-1 placeholder:text-xs placeholder:font-normal placeholder:text-UIslate-400 outline-1 outline-UIslate-400 bg-UIslate-200' placeholder='Search by name' />
        </div>
        {searchOn&&<SearchPopup history={history} />}
      </div>
      <div className='w-fit flexCenter gap-x-4 h-fit'>
        {filter.map((item) => (
          <div key={item.id} className='flexStart gap-y-3 flex-col'>
            <Filtercard type={item.type} />
            {filterType == item.type ? <FilterPopup constant={item.menus} /> : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SearchBar
