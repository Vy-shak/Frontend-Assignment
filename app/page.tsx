import { Mentorsbadge,SearchBar,MentorCard,FilterTabs} from '../components/index'
import React from 'react'
import { Dev,Rishi,Mistry,Jhony } from '../public/index';

const mentors = [
  {
    id: 1,
    profileImg: Jhony,
    rating: 4.9,
    reviews: 120,
    Name: "Jonny Rose",
    role: "Sr. Software Engineering at Google",
    verified: true,
    description:
      "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Development || Growth Management || Full Stack Developer (MERN) || Growth Management || Growth Management || Full Stack Developer",
  },
  {
    id: 2,
    profileImg: Dev,
    rating: 4.7,
    reviews: 95,
    Name: "Dev Jain",
    role: "Sr. Software Engineering at Microsoft",
    verified: true,
    description:
      "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Development || Growth Management || Full Stack Developer (MERN)",
  },
  {
    id: 3,
    profileImg: Rishi,
    rating: 4.8,
    reviews: 110,
    Name: "Rishi Mehta",
    role: "Sr. Software Engineering at JP Morgan",
    verified: true,
    description: "Prev Application Engineer @Google",
  },
  {
    id: 4,
    profileImg: Mistry,
    rating: 4.6,
    reviews: 80,
    Name: "Heet Mistry",
    role: "Sr. Software Engineering at Zomato",
    verified: false,
    description:
      "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Development",
  },
];


function page() {
  return (
    <section className='w-full flex flex-col justify-start items-center pl-52 pt-16 h-full'>
      <Mentorsbadge />
      <section className='w-full gap-y-10  scroll-smooth flex px-18 flex-col justify-start items-center'>
        <SearchBar />
        <FilterTabs/>
        <div className='w-full flexSide gap-y-4 flex-col'>
          {mentors.map((item)=>(
            <MentorCard key={item.id} description={item.description} verified={item.verified} reviews={item.reviews} rating={item.rating} role={item.role} Name={item.Name} profileImg={item.profileImg}/>
          ))}
        </div>
      </section>
    </section>
  )
}

export default page

