import React from 'react'
import { DiGithubBadge } from "react-icons/di";

const Project_card = (props) => {
  return (
    <div className='h-[55vh] w-[42vh]  border-2 border-emerald-100 mt-5 py-5 px-4 rounded-lg shadow-100 hover:scale-105 duration-200 ease-in-out mb-10' style={{ boxShadow: '0 2px 6px rgba(11, 224, 156, 0.5)' }}>
        <img src={props.image} alt="" className='h-[20vh] w-[38vh]' />
      <h1 className='text-xl' style={{fontFamily:'Literata'}}>{props.name}</h1>
      <h2 className='mt-2' style={{fontFamily:'Roboto'}}>{props.date}</h2>
      <h2 className='text-md' style={{fontFamily:'poppins',fontWeight:'light'}}>{props.description}</h2>
      <h2 className='text-md' style={{fontFamily:'poppins',fontWeight:'light'}}>{props.link}</h2>
      <a className="flex mt-5 text-white gap-2 bg-[#06D6A0] w-40 rounded-full px-3 hover:-translate-y-1 duration-200 ease-in-out" gap-2 items-center justify-center href=""><DiGithubBadge  size={30}/>View Code</a>
    </div>
  )
}

export default Project_card
