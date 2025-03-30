"use client"
import React, { Dispatch,SetStateAction } from 'react'
import ChangePagebtns from '../minor/ChangePagebtns'
import PageNum from '../minor/PageNum'
import usePagination from '@/lib/states/usePagination';


function Controlspage() {
    const {currentPage,increase,decrease} = usePagination()
  const pages = [1,2,3,4,5];

  const Nextpage = ()=>{
    if (currentPage>=pages.length) {
        return
    }
    increase()
  }
  const Prevpage = ()=>{
    if (currentPage<=1) {
        return
    }
    decrease()
  }

  return (
    <div className='flexCenter gap-x-4  w-fit h-fit'>
        <div onClick={Prevpage}  className={`${currentPage==1?"opacity-50":"opacity-100"}`}>
        <ChangePagebtns  type='Back'/>
        </div>
      <div className='w-fit gap-x-4 flexCenter'>
        {pages.map((item,index)=>(
                  <PageNum  key={index} num={item}/>
        ))}
      </div>
      <div onClick={Nextpage} className={`${currentPage==pages.length?"opacity-50":"opacity-100"}`}>
        <ChangePagebtns  type='Next'/>
       </div>
    </div>
  )
}

export default Controlspage
