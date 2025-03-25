import React from 'react'

const serviceTabs = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "1:1 Call",
    },
    {
      id: 3,
      name: "Priority DM",
    },
    {
      id: 4,
      name: "Package",
    },
    {
      id: 5,
      name: "Webinar",
    },
    {
      id: 6,
      name: "Digital Product",
    },
  ];

function ServiceTab() {
  return (
    <div className='w-full flexSide'>
      {serviceTabs.map((item)=>(
        
      ))}
    </div>
  )
}

export default ServiceTab
