import React, { useState } from 'react'
import iconheader from '../../assets/logohead.png'
import  '../../App.css'

function MobileMenuButton({ toggleMenu }) {
    return (
      <button
        type="button"
        className="md:hidden block text-gray-400 hover:animate-pulse focus:outline-none"
        id="mobile-menu-button"
        onClick={toggleMenu}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    );
  }
  
  function MobileCloseButton({ toggleMenu }) {
    return (
      <button
        type="button"
        onClick={toggleMenu}
        className="-m-2.5 rounded-md p-2.5 text-gray-700 hidden"
        id="mobile-close-btn"
      >
        <span className="sr-only">Close menu</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    );
  }
  
  function MenuItem({ href, children }) {
    return (
      <a href={href}>
        <li className="text-md font-bold text-link leading-6 hover:underline">{children}</li>
      </a>
    );
  }
  
  function MobileMenuItem({ href, children }) {
    return (
      <a href={href}>
        <li className="text-md font-bold text-gray-700 leading-6 hover:underline">{children}</li>
      </a>
    );
  }
  
  export const Header = () =>  {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
     <div>   
      <div className="md:container mx-auto py-6 overflow-hidden bg-bgcol">
        
        <nav className="flex items-center justify-between mx-auto">
            <div className='flex items-center justify-center'>
                <a href="/">
                    <img className='h-[65px] w-[65px]' src={iconheader} alt="" />
                </a>
                <div>
                    <h2>B & G</h2>
                    <p>Soft-agency</p>
                </div>
            </div>
          
          <MobileMenuButton toggleMenu={toggleMenu} />
          <MobileCloseButton toggleMenu={toggleMenu} />
  
          <menu className='hidden md:flex items-center justify-between gap-[15px] '>
            <MenuItem href="#">Home</MenuItem>
            <MenuItem href="#career">Сareer</MenuItem>
            <MenuItem href="#about">About</MenuItem>
            <MenuItem href="#comments">Comments</MenuItem>
            <MenuItem href="#contact">Contacts</MenuItem>
            
          </menu>
          <div className="md:flex items-center justify-center flex-col py-6  hidden ">
            <a href="#contact-us"> <button>Contact us</button></a>
          </div>
        </nav>
  
        <div className={isMobileMenuOpen ? 'lg:hidden md:hidden' : 'hidden'} role="dialog" aria-modal="true" id="mobile-menu">
        
          <menu className="flex items-center flex-col justify-center gap-[15px]">
          <MenuItem href="#">Home</MenuItem>
            <MenuItem href="#">Сareer</MenuItem>
            <MenuItem href="#">About</MenuItem>
            <MenuItem href="#">Comments</MenuItem>
            <MenuItem href="#">Contacts</MenuItem>
            <MenuItem href="#">Pages</MenuItem>
          </menu>
          
         
          </div>
      
      </div>
     
      </div>
    );
  }
  
  export default Header;