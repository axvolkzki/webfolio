import React from 'react'
import ParticlesBackground from "@/app/components/ParticlesBackground"

export default function Hero() {
  return (
    <section className='h-screen flex flex-col items-center justify-center text-center bg-black text-white p-8'>
      <ParticlesBackground />

      <div>
        Hello, I'm AJ!
      </div>
      <div>
        I'm a Full Stack Developer.
      </div>
      <div>
        Checkout my Works
      </div>
    </section>
  )
}
