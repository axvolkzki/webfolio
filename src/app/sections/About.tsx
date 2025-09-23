import React from 'react'
import Image from 'next/image'
import { images } from '@/app/assets/images'

export default function About() {
  return (
    <section id="about" className='relative z-20 h-screen bg-gray-500 text-white py-28 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center'>
        <h2 className='text-4xl font-bold mb-8'>About Me</h2>
      </div>

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
            {/* left button - download resume */}
            <div className='mt-6'>
              <a href="/Amelia_Abenoja_Resume.pdf" download className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300'>
                Download Resume
              </a>
            </div>

            {/* right button - view projects */}
            <div className='mt-6'>
              <a href="#projects" className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300'>
                View Projects
              </a>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className='col-span-2 sm:col-span-1 flex justify-center'>
          <div className='bg-gray-700 p-4 rounded-lg shadow-lg w-72 h-96'>
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
