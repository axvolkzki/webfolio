import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className='relative z-20 flex flex-col items-center text-center bg-gray-900 text-white py-28 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-2 gap-18 px-20 mb-12'>
        
        {/* left side */}
        <div className='flex flex-col items-center bg-amber-950'>
          {/* contact me */}
          <div className='flex flex-col items-center mb-8 w-full max-w-md bg-gray-700'>
            <h2 className='text-3xl font-bold mb-4'>Get in Touch</h2>
            <p className='text-lg text-gray-300 mb-4'>Feel free to reach out for collaborations or just a friendly hello!</p>
            {/* name */}
            <input type="text" placeholder="Your Name" className='mb-4 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600' />

            {/* email */}
            <input type="email" placeholder="Your Email" className='mb-4 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 required:focus:ring-red-600' />

            {/* message */}
            <textarea placeholder="Your Message" className='mb-4 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 h-32'></textarea>

            {/* submit button */}
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'>Send Message</button>
          </div>

          {/* connect with me */}
          <div className='flex flex-col items-center mb-8 w-full max-w-md bg-gray-700'>
            <h2 className='text-3xl font-bold mb-4'>Connect with Me</h2>
            <p className='text-lg text-gray-300 mb-4'>I'm always open to discussing new projects and opportunities.</p>
            <div className='flex space-x-4'>
              <a href="https://twitter.com/yourhandle" className='text-blue-400 hover:underline'>Twitter</a>
              <a href="https://linkedin.com/in/yourhandle" className='text-blue-600 hover:underline'>LinkedIn</a>
              <a href="https://github.com/yourhandle" className='text-gray-400 hover:underline'>GitHub</a>
            </div>
          </div>

        </div>

        {/* right side */}
        <div className='flex flex-col items-center bg-amber-950'>
          <h2 className='text-3xl font-bold mb-4'>Comments</h2>
          <p className='text-lg text-gray-300 mb-4'>I value your feedback! Please leave your comments below.</p>

          {/* comments section */}
          <div className='flex flex-col items-center w-full max-w-md bg-gray-700 p-4 rounded-lg'>
            {/* name */}
            <input type="text" placeholder="Your Name" className='mb-4 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 required:focus:ring-red-600 ' />

            {/* comment */}
            <textarea placeholder="Your Comment" className='mb-4 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 h-32'></textarea>

            {/* optional image upload */}
            <input type="file" accept="image/*" className='mb-4 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600' />

            {/* submit button */}
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'>Submit Comment</button>
          </div>

          {/* display comments */}
          <div className='mt-8 w-full max-w-md bg-gray-800 p-4 rounded-lg overflow-y-auto h-64'>
            <h3 className='text-2xl font-bold mb-4'>Recent Comments</h3>
            <div className='space-y-4'>
              {/* Example comment */}
              <div className='bg-gray-700 p-4 rounded-lg'>
                <p className='text-gray-300'><span className='font-bold'>Jane Doe:</span> Great portfolio! Really enjoyed your projects.</p>
                <img src="https://via.placeholder.com/150" alt="Comment Attachment" className='mt-2 rounded-lg' />
              </div>
              <div className='bg-gray-700 p-4 rounded-lg'>
                <p className='text-gray-300'><span className='font-bold'>John Smith:</span> Looking forward to collaborating with you!</p>
              </div>
              {/* More comments can be added here */}
            </div>
          </div>
        </div>
      </div>
      
      <div className='absolute bottom-4 text-gray-500 text-sm'>
        &copy; {new Date().getFullYear()} Amelia Abenoja. All rights reserved.
      </div>
    </section>
  )
}
