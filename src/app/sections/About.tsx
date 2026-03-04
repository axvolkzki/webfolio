import React from 'react'
import Image from 'next/image'
import { images } from '@/app/assets/images'

export default function About() {
  return (
    <section id="about" className='relative z-20 min-h-screen text-white flex flex-col items-center py-16 px-6 sm:px-10 lg:px-20'>
      
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">About Me</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl'>
        
        {/* Left column */}
        <div className='flex flex-col justify-center text-left order-2 sm:order-1'>
          <h3 className='text-2xl font-semibold mb-4'>
            Hi! I'm <br />
            <span className="text-3xl">Amelia Abenoja</span>
          </h3>

          <p className='text-base text-gray-300 mb-4'>
            I recently graduated with a degree in Computer Science specializing in Software Technology from De La Salle University - Manila (2021-2025).
            Throughout my undergraduate studies, I built a strong foundation in programming languages, software development methodologies, and problem-solving skills through hands-on projects spanning web development, mobile development, and backend services. 
            I am currently deepening my expertise in Java, with a clear focus on backend development, while also exploring frontend technologies to become a well-rounded full-stack developer.
          </p>
            
          <p className='text-base text-gray-300 mb-6'>
            I am passionate about creating innovative solutions and continuously learning new technologies to enhance my skills as a backend developer.
          </p>

          {/* buttons */}
          <div className='flex flex-wrap gap-4'>
            {/* left button - clickable resume */}
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

            {/* right button - view projects */}
            <a href="#portfolio" className='relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-lg bg-gradient-to-br from-accent-teal to-accent-lime hover:scale-110 transition-transform duration-300 ease-out'>
              <span className="relative px-5 py-2.5 bg-background rounded-md">
                <span className="bg-gradient-to-r from-accent-teal to-accent-lime bg-clip-text text-transparent font-medium">
                  View Portfolio
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className='flex justify-center items-center order-1 sm:order-2'>
          <div className='bg-border p-4 rounded-lg shadow-lg w-60 h-80 sm:w-64 sm:h-80 lg:w-72 lg:h-96'>
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
