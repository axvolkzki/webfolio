'use client';

import React from 'react'
import ParticlesBackground from '../components/ParticlesBackground'

export default function Hero() {
  return (
    <section className='relative h-screen w-full flex flex-col items-center justify-center text-center bg-black text-white p-8 overflow-hidden z-10'>
      <ParticlesBackground />

      <div className="relative z-10">
        <h1 className="text-4xl font-bold">Welcome to AJ's</h1>
        <p className="text-4xl font-bold">Portfolio Website</p>
        <button 
          className="mt-6 px-6 py-2 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-200 hover:scale-105 active:scale-95 active:shadow-inner shadow-lg hover:shadow-xl cursor-pointer" 
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Get To Know Me
        </button>
      </div>
    </section>
  )
}