import React from 'react'
import  '../../App.css'
import iconheader from '../../assets/logohead.png'
export const Hero = () => {
  return (
    <div className="relative h-[700px]  overflow-hidden -z-1 bg-bgcol">
     
      <div className="relative">
      <div className="overflow-hidden absolute md:-left-[200px] top-[250px] -left-[300px]  w-[324px] h-[324px] bg-gradient-to-br from-customorange to-customdarkorange rounded-full blur-circle animate-slide-vertical" />
      <div className="overflow-hidden absolute md:-right-[200px] -right-[280px] top-[200px] w-[324px] h-[324px] bg-gradient-to-br from-customdarkorange to-customRed rounded-full blur-circle animate-slide-vertical-reverse" />
      </div>
     
      <div className="container mx-auto py-12 flex flex-col justify-center items-center ">
      <a href="/">
                    <img className='h-[65px] w-[65px]' src={iconheader} alt="" />
                </a>
        <h1 className="text-3xl md:text-5xl font-bold text-center">Your headline here</h1>
        <p className="text-lg md:text-xl text-center text-gray-800 mt-4">Your description text is here</p>
        <div className="md:flex items-center justify-center flex-col py-6  hidden ">
            <a href="#contact-us"> <button>Contact us</button></a>
          </div>
      </div>
    </div>

    
  )
}
