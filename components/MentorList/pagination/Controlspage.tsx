import React, { Dispatch,SetStateAction } from 'react'
import ChangePagebtns from '../minor/ChangePagebtns'
import PageNum from '../minor/PageNum'

interface control{
    currentPage:number,
    setCurrentpage:Dispatch<SetStateAction<number>>
}

function Controlspage({currentPage,setCurrentpage}:control) {
  const pages = [1,2,3,4,5];
  return (
    <div className='flexCenter gap-x-4  w-fit h-fit'>
        <div onClick={()=>setCurrentpage((prev)=>prev-1)} className='w-fit h-fit '>
        <ChangePagebtns type='Back'/>
        </div>
      <div className='w-fit gap-x-4 flexCenter'>
        {pages.map((item,index)=>(
                  <PageNum key={index} num={item}/>
        ))}
      </div>
      <div onClick={()=>setCurrentpage((prev)=>prev+1)} className='w-fit h-fit '>
        <ChangePagebtns type='Next'/>
        </div>
    </div>
  )
}

export default Controlspage
