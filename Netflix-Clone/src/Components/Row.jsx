import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'


const Row = ({title,fetchURL,rowID}) => {
    const[movies,setMovies]=useState([])
    
    useEffect(()=>{
        axios.get(fetchURL)
        .then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL])
    console.log(movies)

    const sideLeft=()=>{
        var slider = document.getElementById('slider'+rowID);
        slider.scrollLeft= slider.scrollLeft-500;
    }
    const sideRight=()=>{
        var slider = document.getElementById('slider'+rowID);
        slider.scrollLeft= slider.scrollLeft+500;
    }
  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
      <MdChevronLeft onClick={sideLeft} className='bg-white rounded-full absolute  left-10 top-1/2 transform -translate-y-1/2 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
       
      <div  id={'slider'+rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>  { movies&&movies.map((item,id)=>(
           <Movie key={id} item={item}/>
          ))}

        </div>
        <MdChevronRight onClick={sideRight} className='bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2  opacity-50 hover:opacity-100 cursor-pointer z-10 hiddengroup-hover:block' size={40}/>
      </div>
    </>
  )
}

export default Row
