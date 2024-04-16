import React from 'react'
import  '../../App.css'

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4" id="contact-us">
    <div className="max-w-6xl mx-auto px-4">
      <div className="sm:flex sm:justify-between">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="font-bold">Contact Us</p>
          <p>Maksym Belinskyi, CEO</p>
          <p>+380 63 894 83 33 (WhatsApp, Telegram)</p>
          <p>maksym.bielinskyi@bgsoft.agency</p>
        </div>
        <div className="text-center sm:text-right">
          <p className="font-bold">Follow Us</p>
          {/* Placeholder for social media links */}
          <p>LinkedIn / Facebook / Twitter</p>
        </div>
      </div>
    </div>
  </footer>
    
  )
}
