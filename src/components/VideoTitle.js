import React from 'react'

const VideoTitle = ({title,release_date}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-br from-black">
        <h1 className="text-6xl w-1/3 font-bold text-white">{title}</h1>
        <p className="py-6 text-2xl font-bold w-1/4 text-white">{release_date}</p>
      <div >
        <button 
        className="mx-2 p-4 px-12 text-lg bg-white  rounded-lg hover:bg-opacity-70">
             Play</button>
        <button 
        className=" p-4 px-12 text-lg bg-gray-600 text-white rounded-lg  hover:bg-opacity-70 ">
            More Info </button>
      </div>

      
    </div>
  )
}

export default VideoTitle
