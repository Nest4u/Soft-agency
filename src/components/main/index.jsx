import React from 'react'
import  '../../App.css'
import  AnimatedBlock  from '../../components/animate';
import { Goal,MoveDown,Eye,Puzzle,Box, ArrowRight,Globe, Cloud,Monitor,ShoppingCart,Heart } from 'lucide-react';

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { useState,useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function MenuItem({  children }) {
    return (
        <Menu.Item>
        {({ active }) => (
          <a
            href="#"
            className={classNames(
              active ? ' text-gray-900' : 'text-gray-700',
              ' px-4 py-2 text-sm'
            )}
          >
            {children}
          </a>
        )}
      </Menu.Item>
    );
  }
  export const vacancies = [
    {id:'1', title: 'Frontend Developer', description: 'Description for Frontend', detailsLink: '#',location:'ukr', language:'eng',type:'remout1', color: 'bg-or1', responsibilities: "Description for Frontend",qualifications:"Description for Frontend",offer:"Description for Frontend" },
    {id:'2',  title: 'Frontend Developer', description: 'Description for Frontend', detailsLink: '#',location:'ukr', language:'eng',type:'remout2', color: 'bg-or2' },
    {id:'3',  title: 'Frontend Developer', description: 'Description for Frontend', detailsLink: '#',location:'ukr', language:'eng',type:'remout3', color: 'bg-or3' },
    {id:'4',  title: 'Frontend Developer', description: 'Description for Frontend', detailsLink: '#',location:'ukr', language:'eng',type:'remout4', color: 'bg-or4' },
  ];
export const Main = () => {


    const windowWidth = window.innerWidth;
   
const spacing = 180;
 
  const animationDuration = 35000;

  
  const createAnimation = (delay) => {
    return useSpring({
      from: { left: -spacing }, 
      to: async next => {
        while (true) {
            while(windowWidth < 480){
                await next({ left: windowWidth +400 });
                await next({from: { left: -spacing }});
            }
          await next({ left: windowWidth }); 
         
          await next({from: { left: -spacing }}); 
          
        }
      },
      config: { duration: animationDuration },
      delay: delay 
    });
  };

 
  const props1 =  createAnimation(0);
  const props2 = createAnimation(7100);
  const props3 =  createAnimation(14200);
  const props4 =  createAnimation(21300);
  const props5 = createAnimation(28400) ;
  const radius = 10; 
const circumference = 2 * Math.PI * radius; 
const redPercentage =  (55 / 100) * circumference; 
const greenPercentage = (15 / 100) * circumference; 
const bluePercentage = (25 / 100) * circumference; 
const orangePercentage = (5 / 100) * circumference; 
 
const testimonials = [
    {
      company: 'Company name',
      name: 'Your name',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar eros vel tortor feugiat, ut laoreet ante hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar eros vel tortor feugiat, ut laoreet ante hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar eros vel tortor feugiat, ut laoreet ante hendrerit.'
    },
    {
        company: 'Company name',
        name: 'Your name',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar eros vel tortor feugiat, ut laoreet ante hendrerit.'
      },
      {
        company: 'Company name',
        name: 'Your name',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar eros vel tortor feugiat, ut laoreet ante hendrerit.'
      },
  
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div >

<section>
<div style={{ position: 'relative', width: '100%', height: '100px', backgroundColor: 'white', overflow: 'hidden' }}>
      <animated.div style={{ ...props1, position: 'absolute', display: 'flex', alignItems: 'center', marginTop: '35px', gap: '10px' }}>
        <Cloud size={24} />
        Cost Saving
      </animated.div>
      <animated.div style={{ ...props2, position: 'absolute', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '35px' }}>
        <Globe size={24} />
        Global Talents
      </animated.div>
      <animated.div style={{ ...props3, position: 'absolute', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '35px' }}>
        <Heart size={24} />
        Quality Efficiency
      </animated.div>
      <animated.div style={{ ...props4, position: 'absolute', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '35px' }}>
        <Monitor size={24} />
        Non-Stop Support
      </animated.div>
      <animated.div style={{ ...props5, position: 'absolute', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '35px' }}>
        <ShoppingCart size={24} />
        Another Text
      </animated.div>
    </div>

</section>
     <section className='flex justify-around items-center mx-auto lg:flex-row flex-col text-center ' id='about'>
        <div><h1 className=' text-5xl font-bold items-center mx-auto'>Company's mission</h1></div>
        <div><p className='text-lg md:text-xl items-center text-gray-800 mt-4 lg:h-[300px] h-[560px] lg:w-[600px] w-[320px]'>Founded in 2020, we have grown from a small and provincial 
        start-up to an international organization, serving a diverse range of 
        clients across industries and continents. We believe in the power of 
        digital transformation to reshape businesses and elevate 
        experiences. Our team of dedicated professionals brings together a 
        unique blend of expertise, from advanced software developers and 
        data scientists to creative designers and QA engineers. Beyond 
        just services, we also build long-lasting partnerships based on 
        trust and growth. With us, you are not just another customer. You 
        are a valuable partner.
</p></div>
     </section>
     <section className="flex justify-around items-stretch flex-wrap mx-auto mt-[25px] lg:flex-nowrap">
  <div className="flex flex-col justify-between items-center w-[300px] p-4 border border-gray-300 rounded-md hover:shadow-lg mb-4 lg:mb-0">
    <div><Goal className="h-[75px] w-[75px]" /></div>
    <div><h2 className="text-3xl">Mission</h2></div>
    <p className="text-center">
      To provide seamless 
      solutions that 
      enhance operational 
      efficiency and drive 
      growth for any kind 
      of business
    </p>
  </div>
  <div className="flex flex-col justify-between items-center w-[300px] p-4 border border-gray-300 rounded-md hover:shadow-lg mb-4 lg:mb-0">
    <div><Eye className="h-[75px] w-[75px]"/></div>
    <div><h2 className="text-3xl">Vision</h2></div>
    <p className="text-center">
      To be the foremost 
      outsourcing partner 
      worldwide, setting 
      benchmarks in 
      innovation, reliability, 
      and customer 
      satisfaction
    </p>
  </div>
  <div className="flex flex-col justify-between items-center w-[300px] p-4 border border-gray-300 rounded-md hover:shadow-lg">
    <div><Puzzle className="h-[75px] w-[75px]"/></div>
    <div><h2 className="text-3xl">Values</h2></div>
    <p className="text-center">
      Our core values are: <br />  
      - Responsibility <br /> 
      - Quality <br /> 
      - Efficiency <br /> 
      - Integrity <br /> 
      - Customer focus
    </p>
  </div>
</section>


<section className="flex flex-col  space-x-4 mt-[30px]  mx-auto">
    <div> <h2 className="text-4xl font-bold items-center mx-auto text-center ">Variation of Work with Us</h2></div>
  <div  className=" flex justify-around mt-[45px] items-stretch flex-wrap  lg:flex-nowrap">
   
      <Menu as="div" className="relative inline-block text-left">
        <div className='flex justify-between items-center border-y-2 border-gray-500 lg:mb-0 mb-[20px]'>
            <Menu.Button className="inline-flex  w-[250px] justify-center gap-x-1.5 rounded-md bg-custom-color px-3 py-2 text-sm font-semibold text-gray-900 ">
            Outstaffing
          
            
            </Menu.Button>
            <MoveDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="flex right-0  mt-2 w-[266px] items-center  bg-opacity-90 rounded-md shadow-lg focus:outline-none">
            <div className="py-1 flex flex-col">
              <MenuItem>Identifying Needs</MenuItem>
              <MenuItem>Recruiting</MenuItem>
              <MenuItem>Presenting</MenuItem>
              <MenuItem>Onboarding</MenuItem>
              <MenuItem>Monitoring and Communication</MenuItem>
              {/* Добавьте остальные пункты меню */}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
   

    {/* Блок 2 */}
   
      
      
      {/* Меню */}
     <Menu as="div" className="relative inline-block text-left">
  <div className='flex justify-between items-center border-y-2 border-gray-500'>
    <Menu.Button className="inline-flex  w-[250px] justify-center gap-x-1.5 rounded-md bg-custom-color px-3 py-2 text-sm font-semibold text-gray-900 ">
      Outsourcing
      
    </Menu.Button>
    <MoveDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
  </div>

  <Transition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <Menu.Items className="flex right-0 z-10 mt-2 w-[266px] origin-top-right bg-custom-color bg-opacity-90 rounded-md shadow-lg focus:outline-none">
      <div className="py-1 flex flex-col ">
        <MenuItem>Identifying Needs</MenuItem>
        <MenuItem>Defining Scope and Budget</MenuItem>
        <MenuItem>Deadline Negotiation</MenuItem>
        <MenuItem>Process Discussion</MenuItem>
        <MenuItem>Results Demonstrating</MenuItem>
       
      </div>
    </Menu.Items>
  </Transition>
</Menu>

    
  </div>
</section>

<section className=" py-16 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Target Audience</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 mx-auto">
            <p className="text-lg leading-relaxed">
              Our target audience is rather specialized than general, main focus is concentrated on organizations of different sizes, startups and individuals in need of technology services and support.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative">
            <svg className="w-64 h-64" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r={radius} fill="none" stroke="#FE9900" strokeWidth="2" strokeDasharray={`${redPercentage} ${circumference - redPercentage}`} transform="rotate(-90 12 12)" />
                <circle cx="12" cy="12" r={radius} fill="none" stroke="#EC7500" strokeWidth="2" strokeDasharray={`${bluePercentage} ${circumference - bluePercentage}`} transform="rotate(108 12 12)" />
                <circle cx="12" cy="12" r={radius} fill="none" stroke="#AF5A00" strokeWidth="2" strokeDasharray={`${greenPercentage} ${circumference - greenPercentage}`} transform="rotate(-144 12 12)" />
                <circle cx="12" cy="12" r={radius} fill="none" stroke="#773F04" strokeWidth="2" strokeDasharray={`${orangePercentage} ${circumference - orangePercentage}`} transform="rotate(-162 12 12)" />
             
</svg>
            


              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-or4 rounded-full mr-2"></div>
                <span className="text-sm font-semibold">5% </span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-or3 rounded-full mr-2"></div>
                <span className="text-sm font-semibold">15%  </span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-or2 rounded-full mr-2"></div>
                <span className="text-sm font-semibold">25% </span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-or1 rounded-full mr-2"></div>
                <span className="text-sm font-semibold">55%  </span>
              </div>
              </div>
            </div>
            <div className="ml-4">
            <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-or4 rounded-full mr-2"></div>
                <span className="text-sm font-semibold">- Individual Entrepreneurs </span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-or3 rounded-full mr-2"></div>
                <span className="text-sm font-semibold">- Large Corporations </span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-or2 rounded-full mr-2"></div>
                <span className="text-sm font-semibold">- Startups</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-or1 rounded-full mr-2"></div>
                <span className="text-sm font-semibold">- Small and Medium Companies </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-8" id='comments'>
      <div className="container mx-auto px-4  max-w-[900px]">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Partners Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 border rounded-lg border-orange-500 bg-white ">
              <h3 className="text-xl font-semibold mb-2">{testimonial.company}</h3>
              <h3 className="text-xl mb-2">{testimonial.name}</h3>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>

    <section className=" p-8" id='career'>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Career</h2>
       
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {vacancies.map((vacancy, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{vacancy.title}</h3>
            <div className={`${vacancy.color} text-white p-2 rounded opacity-35 mb-4 `}>
              {vacancy.description}
            </div>
            <div className='flex items-center'>
            <Link to={`/vacancy/${index+1}`} className="text-dark font-bold py-2 px-4 rounded">Details </Link>
            <ArrowRight/>
            </div>
          </div>
        ))}
      </div>
      
       
    </section>

      
    </div>
    
  )
}
