import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className='h-screen flex flex-col items-center justify-center text-center bg-gray-700 text-white p-8'>
      <h2 className='text-3xl font-bold mb-4'>Contact</h2>
      <p className='text-lg'>This is the contact section...</p>

      <form className='mt-4'>
        <input type="text" placeholder="Your Name" className='p-2 rounded-md mr-2' />
        <input type="email" placeholder="Your Email" className='p-2 rounded-md mr-2' />
        <textarea placeholder="Your Message" className='p-2 rounded-md mr-2' rows={4}></textarea>
        <button type="submit" className='bg-blue-500 text-white p-2 rounded-md'>Send</button>
      </form>
    </section>
  )
}
