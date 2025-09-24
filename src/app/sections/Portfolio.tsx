'use client';

import React from 'react'
import { useState } from 'react'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of Project One.',
      image: '/path/to/image1.jpg',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      image: '/path/to/image2.jpg',
      tech: ['React', 'Express', 'MySQL'],
      link: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of Project Three.',
      image: '/path/to/image3.jpg',
      tech: ['Vue', 'Firebase'],
      link: '#'
    }
  ]

  const certificates = [
    {
      id: 1,
      title: 'Certificate One',
      issuer: 'Issuer One',
      date: 'Jan 2023',
      image: '/path/to/certificate1.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'Certificate Two',
      issuer: 'Issuer Two',
      date: 'Jun 2023',
      image: '/path/to/certificate2.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'Certificate Three',
      issuer: 'Issuer Three',
      date: 'Dec 2023',
      image: '/path/to/certificate3.jpg',
      link: '#'
    }
  ]

  const techStack = [
    {
      category: 'Frontend',
      technologies: ['React', 'Vue', 'Angular', 'HTML', 'CSS', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'Django', 'Flask', 'Ruby on Rails']
    },
    {
      category: 'Databases',
      technologies: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase']
    },
    {
      category: 'Tools & Others',
      technologies: ['Git', 'Docker', 'AWS', 'Heroku', 'Netlify']
    }
  ]

  const renderProjects = () => (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
      {projects.map(project => (
        <div key={project.id} className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <h3 className='text-2xl font-semibold mb-4'>{project.title}</h3>
          <p className='text-gray-300'>{project.description}</p>
          {/* Add image, tech stack, and link as needed */}
        </div>
      ))}
    </div>
  );

  const renderCertificates = () => (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
      {certificates.map(certificate => (
        <div key={certificate.id} className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <h3 className='text-2xl font-semibold mb-4'>{certificate.title}</h3>
          <p className='text-gray-300'>{certificate.issuer}</p>
          <p className='text-gray-300'>{certificate.date}</p>
          {/* Add image and link as needed */}
        </div>
      ))}
    </div>
  );

  const renderTechStack = () => (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
      {techStack.map(stack => (
        <div key={stack.category} className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <h3 className='text-2xl font-semibold mb-4'>{stack.category}</h3>
          <p className='text-gray-300'>{stack.technologies.join(', ')}</p>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'projects':
        return renderProjects();
      case 'certificates':
        return renderCertificates();
      case 'techStack':
        return renderTechStack();
      default:
        return renderProjects();
    }
  };


  return (
    <section id="portfolio" className='relative z-20 h-screen flex flex-col items-center text-center bg-gray-950 text-white py-28 sm:px-6 lg:px-8'>
      <div className="max-w-6xl mx-auto p-6">
        {/* Portfolio Header */}
        {/* <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Portfolio</h2>
          <p className="text-gray-600">Explore my work, certifications, and technical skills</p>
        </div> */}

        {/* Mini Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'projects'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'certificates'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
              }`}
            >
              Certificates
            </button>
            <button
              onClick={() => setActiveTab('techstack')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'techstack'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
              }`}
            >
              Tech Stack
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-96 transition-all duration-300">
          {renderContent()}
        </div>
      </div>
    </section>
  );

  // return (
  //   <section id="portfolio" className='relative z-20 h-screen flex flex-col items-center text-center bg-gray-950 text-white py-28 sm:px-6 lg:px-8'>
  //     <div className='grid h-25 grid-cols-3 content-start gap-0'>
  //       <div className='flex flex-col items-center justify-center rounded-lg bg-gray-800 p-4 shadow-lg'>
  //         <h3 className='text-2xl font-semibold mb-2'>Projects</h3>
  //       </div>
  //       <div className='flex flex-col items-center justify-center rounded-lg bg-gray-800 p-4 shadow-lg'>
  //         <h3 className='text-2xl font-semibold mb-2'>Certificates</h3>
  //       </div>
  //       <div className='flex flex-col items-center justify-center rounded-lg bg-gray-800 p-4 shadow-lg'>
  //         <h3 className='text-2xl font-semibold mb-2'>Tech Stack</h3>
  //       </div>
  //     </div>
      
  //     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
  //       {/* Example project cards */}
  //       <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
  //         <h3 className='text-2xl font-semibold mb-4'>Project One</h3>
  //         <p className='text-gray-300'>A brief description of Project One.</p>
  //       </div>
  //       <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
  //         <h3 className='text-2xl font-semibold mb-4'>Project Two</h3>
  //         <p className='text-gray-300'>A brief description of Project Two.</p>
  //       </div>
  //       <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
  //         <h3 className='text-2xl font-semibold mb-4'>Project Three</h3>
  //         <p className='text-gray-300'>A brief description of Project Three.</p>
  //       </div>
  //     </div>
  //   </section>
  // )
}
