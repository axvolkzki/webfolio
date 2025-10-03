'use client';

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { images } from '@/app/assets/images'

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
      title: 'Ruby Certificate 2023',
      issuer: 'SoloLearn',
      date: 'Apr 2023',
      image: images.certificates.CertRuby2023,
      link: '#'
    },
    {
      id: 2,
      title: 'Certificate Two',
      issuer: 'Issuer Two',
      date: 'Jun 2023',
      image: images.certificates.CertRuby2023,
      link: '#'
    },
    {
      id: 3,
      title: 'Certificate Three',
      issuer: 'Issuer Three',
      date: 'Dec 2023',
      image: images.certificates.CertRuby2023,
      link: '#'
    },
    {
      id: 4,
      title: 'Certificate Four',
      issuer: 'Issuer Four',
      date: 'Mar 2024',
      image: images.certificates.CertRuby2023,
      link: '#'
    },
    {
      id: 5,
      title: 'Certificate Five',
      issuer: 'Issuer Five',
      date: 'May 2024',
      image: images.certificates.CertRuby2023,
      link: '#'
    },
    {
      id: 6,
      title: 'Certificate Six',
      issuer: 'Issuer Six',
      date: 'Jun 2024',
      image: images.certificates.CertRuby2023,
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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-amber-600 px-8 w-full max-w-7xl'>
      {certificates.map(certificate => (
        <div key={certificate.id} className='bg-gray-800 p-1 hover:shadow-xl transition-shadow duration-300'>
          <Image src={certificate.image} alt={certificate.title} className='w-full h-56 object-cover' />
          {/* <h3 className='text-2xl font-semibold mb-4'>{certificate.title}</h3>
          <p className='text-gray-300'>{certificate.issuer}</p>
          <p className='text-gray-300'>{certificate.date}</p> */}
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
    <section id="portfolio" className='relative z-20 h-screen w-full flex flex-col items-center text-center text-white pt-20 sm:px-6 lg:px-28'>
      
      {/* Tab Buttons */}
      <div className="w-full mx-auto flex gap-2 mb-8">
        
        {/* Projects Tab */}
        <button
          onClick={() => setActiveTab('projects')}
          className={`flex-1 relative p-0.5 rounded-lg transition-all duration-300 ${
            activeTab === 'projects'
              ? 'bg-gradient-to-br from-accent-teal to-accent-lime'
              : 'bg-border hover:bg-gradient-to-br hover:from-accent-teal/50 hover:to-accent-lime/50'
          }`}
        >
          <div className="bg-background rounded-md px-6 py-4 h-full flex flex-col justify-center items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className={`size-6 ${
                activeTab === 'projects'
                  ? 'stroke-accent-teal'
                  : 'stroke-text-secondary'
              }`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
            
            <h3 className={`font-medium transition-all duration-300 ${
              activeTab === 'projects'
                ? 'bg-gradient-to-r from-accent-teal to-accent-lime bg-clip-text text-transparent'
                : 'text-text-secondary'
            }`}>
              Projects
            </h3>
          </div>
        </button>
        
        {/* Certificates Tab */}
        <button
          onClick={() => setActiveTab('certificates')}
          className={`flex-1 relative p-0.5 rounded-lg transition-all duration-300 ${
            activeTab === 'certificates'
              ? 'bg-gradient-to-br from-accent-teal to-accent-lime'
              : 'bg-border hover:bg-gradient-to-br hover:from-accent-teal/50 hover:to-accent-lime/50'
          }`}
        >
          <div className="bg-background rounded-md px-6 py-4 h-full flex flex-col justify-center items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className={`size-6 ${
                activeTab === 'certificates'
                  ? 'stroke-accent-teal'
                  : 'stroke-text-secondary'
              }`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            
            <h3 className={`font-medium transition-all duration-300 ${
              activeTab === 'certificates'
                ? 'bg-gradient-to-r from-accent-teal to-accent-lime bg-clip-text text-transparent'
                : 'text-text-secondary'
            }`}>
              Certificates
            </h3>
          </div>
        </button>
        
        {/* Tech Stack Tab */}
        <button
          onClick={() => setActiveTab('techstack')}
          className={`flex-1 relative p-0.5 rounded-lg transition-all duration-300 ${
            activeTab === 'techstack'
              ? 'bg-gradient-to-br from-accent-teal to-accent-lime'
              : 'bg-border hover:bg-gradient-to-br hover:from-accent-teal/50 hover:to-accent-lime/50'
          }`}
        >
          <div className="bg-background rounded-md px-6 py-4 h-full flex flex-col justify-center items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className={`size-6 ${
                activeTab === 'techstack'
                  ? 'stroke-accent-teal'
                  : 'stroke-text-secondary'
              }`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
            
            <h3 className={`font-medium transition-all duration-300 ${
              activeTab === 'techstack'
                ? 'bg-gradient-to-r from-accent-teal to-accent-lime bg-clip-text text-transparent'
                : 'text-text-secondary'
            }`}>
              Tech Stack
            </h3>
          </div>
        </button>
      </div>


      {/* Content Area */}
      <div className="min-h-96 transition-all duration-300">
        {renderContent()}
      </div>
    </section>
  );
}
