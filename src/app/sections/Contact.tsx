import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className='relative z-20 flex flex-col text-white py-20 sm:px-6 lg:px-28'>
      <h2 className='text-4xl font-bold mb-8 text-center'>Contact</h2>
      
      <div className='grid grid-cols-2 gap-12 items-center items-justify-center'>
        {/* Left column */}
        <div className='col-span-2 sm:col-span-1'>
          <h3 className='text-2xl font-bold mb-2 text-center'>Connect with Me</h3>

          {/* underline */}
          <div className='w-24 h-0.5 bg-accent-teal mx-auto mb-3'></div>

          <div className='items-center text-center p-4 space-y-4'>
            {/* email */}
            <div className='flex items-center gap-3 mx-auto bg-surface px-4 py-2 rounded-lg w-max'>
              <div className='w-8 h-8 flex-shrink-0'>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <defs>
                    <linearGradient id="emailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#5eead4" />
                      <stop offset="100%" stopColor="#bef264" />
                    </linearGradient>
                  </defs>
                  <path 
                    fill="url(#emailGradient)"
                    d="M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z"
                  />
                </svg>
              </div>
              
              <span className="text-foreground">
                <a href='mai&#108;to&#58;&#97;melia&#106;o%79%6&#51;e&#46;%61&#37;&#54;2%6&#53;n&#111;j%6&#49;&#64;%6F%75tl&#111;%6F%6B&#46;c%&#54;F&#109;'>ame&#108;&#105;aj&#111;yce&#46;ab&#101;noja&#64;&#111;utl&#111;ok&#46;com</a>
              </span>
            </div>

            {/* social media icons */}
            <div className='flex flex-col gap-2 mt-10'>
              <h4 className='text-lg font-semibold text-center'>Find me on:</h4>

              {/* underline */}
              <div className='w-24 h-0.5 bg-accent-teal mx-auto mb-6'></div>

              <div className='items-center justify-items-center'>
                <div className='grid auto-cols-max grid-flow-col gap-6 justify-center'>
                  {/* linkedin */}
                  <a 
                    href="https://www.linkedin.com/in/amelia-joyce-abenoja" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='hover:opacity-80 transition-opacity'
                  >
                    <div className='w-8 h-8'>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <defs>
                          <linearGradient id="linkedinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#5eead4" />
                            <stop offset="100%" stopColor="#bef264" />
                          </linearGradient>
                        </defs>
                        <path 
                          fill="url(#linkedinGradient)"
                          d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"
                        />
                      </svg>
                      
                    </div>
                  </a>

                  {/* github */}
                  <a 
                    href="https://github.com/axvolkzki" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='hover:opacity-80 transition-opacity'
                  >
                    <div className='w-8 h-8'>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                      >
                        <defs>
                          <linearGradient id="githubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#5eead4" />
                            <stop offset="100%" stopColor="#bef264" />
                          </linearGradient>
                        </defs>
                        <path
                          fill="url(#githubGradient)"
                          d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM265.8 407.7c0-1.8 0-6 .1-11.6 .1-11.4 .1-28.8 .1-43.7 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-26.6-7.5-56.6-7.5-83.2 0 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 9 .1 21.7 .1 30.6 0 4.8 .1 8.6 .1 10 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7 .6 3.9 1.9 .3 1.3-1 2.6-3 3-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7 .9 3.7 2.4 0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1 .9-1.1 2.8-.9 4.3 .6 1.3 1.3 1.8 3.3 .9 4.1-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9 1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5 .9-.9 2.4-.4 3.5 .6 1.1 1.3 1.3 2.8 .4 3.5-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6 .4-.6 1.5-.9 2.8-.4 1.3 .7 1.9 1.8 1.5 2.6-.4 .9-1.7 1.1-2.8 .4z"
                        />
                      </svg>
                    </div>
                  </a>
                  
                  {/* instagram */}
                  <a 
                    href="https://www.instagram.com/myvlkzk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='hover:opacity-80 transition-opacity'
                  >
                    <div className='w-8 h-8'>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <defs>
                          <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#5eead4" />
                            <stop offset="100%" stopColor="#bef264" />
                          </linearGradient>
                        </defs>
                        <path
                          fill="url(#instagramGradient)"
                          d="M194.4 211.7a53.3 53.3 0 1 0 59.2 88.6 53.3 53.3 0 1 0 -59.2-88.6zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12-18.1-7.1-57.6-6.8-83.1-6.5-4.1 0-7.9 .1-11.2 .1s-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2 0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2 2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5 4.1 0 7.9-.1 11.2-.1s7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5 6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83 0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83-2.7-6.9-6.8-13.1-12-18.4l0 .2zm-67.1 44.5c18.1 12.1 30.6 30.9 34.9 52.2s-.2 43.5-12.3 61.6c-6 9-13.7 16.6-22.6 22.6s-19 10.1-29.6 12.2c-21.3 4.2-43.5-.2-61.6-12.3s-30.6-30.9-34.9-52.2 .2-43.5 12.2-61.6 30.9-30.6 52.2-34.9 43.5 .2 61.6 12.2l.1 0zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1 2.6-7.1 5.2-9.8 6.1-4.5 9.8-5.2 7.6-.4 11.1 1.1 6.5 3.9 8.6 7 3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2-3.9 3.2-6.2 4.2-4.8 1.5-7.3 1.5c-3.8 0-7.5-1.1-10.6-3.2l-.1 0zM448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM357 389c-18.7 18.7-41.4 24.6-67 25.9-26.4 1.5-105.6 1.5-132 0-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132 1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0 25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9-1.3 25.6-7.1 48.3-25.8 67l0 .1z"
                        />
                      </svg>
                    </div>
                  </a>

                  {/* leetcode */}
                  <a 
                    href="https://leetcode.com/u/axvolkzki/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='hover:opacity-80 transition-opacity'
                  >
                    <div className='w-8 h-8'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        role="img"
                      >
                        <defs>
                          <linearGradient id="leetcodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#5eead4" />
                            <stop offset="100%" stopColor="#bef264" />
                          </linearGradient>
                        </defs>
                        <path
                          fill="url(#leetcodeGradient)"
                          d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Right column */}
        <div className='col-span-2 sm:col-span-1 flex justify-center'>
          <div className='flex flex-col w-full max-w-md bg-background p-6 rounded-lg shadow-lg'>
            {/* name */}
            <input type="text" placeholder="Your Name" className='mb-4 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-accent-teal' />

            {/* email */}
            <input 
              type="email" 
              placeholder="Your Email"
              className='mb-4 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-accent-teal required:focus:ring-red-600' />

            {/* message */}
            <textarea 
              placeholder="Your Message" 
              className='mb-4 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-accent-teal h-32'
            ></textarea>

            {/* submit button */}
            <button className='bg-gradient-to-r from-accent-teal to-accent-lime hover:opacity-80 transition-opacity text-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-accent-teal'>Send Message</button>
          </div>
        </div>
      </div>
      
      
      
      
      
    </section>
  )
}
