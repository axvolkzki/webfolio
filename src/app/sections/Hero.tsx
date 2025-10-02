'use client';

import React from 'react'
import ParticlesBackground from '../components/ParticlesBackground'

export default function Hero() {
  return (
    <section className='relative h-screen w-full flex flex-col items-center justify-center text-center bg-background p-8 overflow-hidden z-10'>
      <ParticlesBackground />

      <div className="relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground">Welcome to AJ's</h1>
          <p className="text-4xl font-bold text-foreground">Portfolio Website</p>
        </div>

        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-lg bg-gradient-to-br from-accent-teal to-accent-lime hover:scale-110 transition-transform duration-300 ease-out"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="relative px-5 py-2.5 bg-background rounded-md">
            <span className="bg-gradient-to-r from-accent-teal to-accent-lime bg-clip-text text-transparent font-medium">
              Get To Know Me
            </span>
          </span>
        </button>
      </div>
    </section>
  )
}