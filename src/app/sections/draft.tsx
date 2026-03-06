import React from "react";

export default function Draft() {
  return (
    <section id="draft" className='relative z-20 flex flex-col text-center bg-gray-900 text-white py-20 sm:px-6 lg:px-28'>
      {/* Version 1 - contact */}
      <div className='grid grid-cols-2 gap-2 mb-12'>
        
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
            <p className='text-lg text-gray-300 mb-4'>{"I'm always open to discussing new projects and opportunities."}</p>
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
            </div>
          </div>
        </div>
      </div>








      {/* Version 1 - tsparticles test */}
      {/* async function loadingParticles(engine: Engine) {
          await loadFull(engine)
        }
      
        return (
          <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
            <Particle
              id="tsparticles"
              init={loadingParticles}
              style={{
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
              }}
              options={{
                fullScreen: {
                  enable: true,
                  zIndex: 0
                },
                background: {
                  color: {
                    value: "transparent"
                  }
                },
                fpsLimit: 60,
                particles: {
                  number: {
                    value: 80,
                      density: {
                        enable: true,
                        value_area: 800
                      }
                    },
                    color: {
                      value: "#ffffff"
                    },
                    shape: {
                      type: "circle",
                      stroke: {
                        width: 0,
                        color: "#000000"
                      },
                      polygon: {
                        nb_sides: 5
                      },
                      image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                      }
                    },
                    opacity: {
                      value: 0.5,
                      random: false,
                      anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                      }
                    },
                    size: {
                      value: 3,
                      random: true,
                      anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                      }
                    },
                    line_linked: {
                      enable: true,
                      distance: 150,
                      color: "#ffffff",
                      opacity: 0.4,
                      width: 1
                    },
                    move: {
                      enable: true,
                      speed: 1.5,
                      direction: "none",
                      random: false,
                      straight: false,
                      out_mode: "out",
                      bounce: false,
                      attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                      }
                    }
                  },
                  interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "grab"
                      },
                      onclick: {
                        enable: true,
                        mode: "push"
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 140,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4
                      },
                      push: {
                        particles_nb: 4
                      },
                      remove: {
                        particles_nb: 2
                      }
                    }
                  },
                  retina_detect: true
                }}
            />
          </div>
        ) */}
    </section>
  )
}
