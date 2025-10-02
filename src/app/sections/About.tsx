import React from 'react'
import Image from 'next/image'
import { images } from '@/app/assets/images'
import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className='relative z-20 h-screen text-white flex flex-col items-center py-28 sm:px-6 lg:px-8'>
      <h2 className='text-4xl font-bold mb-8'>About Me</h2>

      <div className='grid grid-cols-2 gap-12 px-20'>
        {/* Left column */}
        <div className='col-span-2 sm:col-span-1 text-left'>
          <h3 className='text-2xl font-semibold mb-4'>Hi! I'm 
            <br />
            Amelia Abenoja
          </h3>
          <p className='text-lg text-gray-300 mb-4'>I have a background in computer science and have worked on various projects involving web development, mobile development, and backend services.</p>
          <p className='text-lg text-gray-300'>I am a passionate web developer with experience in building dynamic and responsive web applications.</p>

          <div className='grid grid-cols-2 gap-12 px-20'>
            {/* left button - clickable resume */}
            <div className='mt-6'>
              <a 
                href="/files/Amelia_Abenoja_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className='relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-lg bg-gradient-to-br from-accent-teal to-accent-lime hover:scale-110 transition-transform duration-300 ease-out'
              >
                <span className="relative px-5 py-2.5 bg-background rounded-md">
                  <span className="bg-gradient-to-r from-accent-teal to-accent-lime bg-clip-text text-transparent font-medium">
                    Open Resume
                  </span>
                </span>
              </a>
            </div>

            {/* right button - view projects */}
            <div className='mt-6'>
              <a href="#portfolio" className='relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-lg bg-gradient-to-br from-accent-teal to-accent-lime hover:scale-110 transition-transform duration-300 ease-out'>
                <span className="relative px-5 py-2.5 bg-background rounded-md">
                  <span className="bg-gradient-to-r from-accent-teal to-accent-lime bg-clip-text text-transparent font-medium">
                    View Portfolio
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className='col-span-2 sm:col-span-1 flex justify-center'>
          <div className='bg-border p-4 rounded-lg shadow-lg w-72 h-96'>
            <Image 
              src={images.about.catProfile} 
              alt="Profile" 
              className='w-full h-full object-cover rounded-lg'
              width={288}
              height={384}
            />
          </div>
        </div>
      </div>

    </section>
  )
}
