import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineCalendar } from "react-icons/ai";
import { FaUniversity } from "react-icons/fa";
const Card = (props) => {
   
  return (
    <div className='h-[40vh] w-[42vh]  border-2 border-emerald-100 mt-5 py-5 px-4 rounded-lg shadow-100 hover:scale-105 duration-200 ease-in-out' style={{ boxShadow: '0 2px 6px rgba(11, 224, 156, 0.5)' }}>
        <FaUniversity size={35} className="text-emerald-500 " />
    <h1 className="text-2xl mt-5" style={{ color: 'rgba(35, 33, 33, 1)' ,fontWeight:'bolder',fontStyle: 'normal'}}>{props.degree}</h1>

      <h2 className=" text-md mb-1 text-emerald-800" style={{fontFamily: 'Roboto, serif',fontStyle:'italic',fontWeight:'bold'}}>{props.institution} </h2>
      <h3 className=" flex text-md mt-2 mb-1" style={{}}><FaMapMarkerAlt className="text-emerald-600 mr-1" size={14} />{props.location}</h3>
      <h3 className="text-md mb-1 flex gap-2 mt-2 " style={{}}><AiOutlineCalendar size={20}/>{props.year}</h3>

      {props.cgpa && (
        <h3 className=" text-md " > CGPA: {props.cgpa}</h3>
      )}

      {props.percentage && (
        <h3 className=" text-md">Percentage: {props.percentage}</h3>
      )}
    </div>
  )
}

export default Card;

