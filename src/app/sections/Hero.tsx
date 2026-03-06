'use client';

import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className='relative z-10 h-screen w-full flex flex-col items-center justify-center text-center p-8 overflow-hidden'>

      <div className="relative">
        <div className="mb-8">
          <h1 className="sm:text-4xl lg:text-5xl font-bold text-foreground">{"Hi! I'm Amelia"}</h1>
          <p className="text-4xl font-bold text-foreground">Checkout my Webfolio</p>
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