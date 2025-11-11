import React from 'react'

export default function Footer() {
  return (
    <section id="footer" className='relative z-20 flex flex-col items-center text-center text-white pb-28 sm:px-6 lg:px-28'>
      <div className='absolute bottom-4 text-gray-500 text-sm'>
        AMELIA ABENOJA &copy; {new Date().getFullYear()}
      </div>
    </section>
  )
}
