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
      image: images.projects.projectCattoo,
      tech: ['React', 'Node.js', 'MongoDB'],
      demoLink: 'https://github.com/axvolkzki',
      sourceCodeLink: 'https://github.com/axvolkzki'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      image: images.projects.projectCattoo,
      tech: ['React', 'Express', 'MySQL'],
      demoLink: '#',
      sourceCodeLink: 'https://github.com/axvolkzki'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of Project Three.',
      image: images.projects.projectCattoo,
      tech: ['Vue', 'Firebase'],
      demoLink: '#',
      sourceCodeLink: 'https://github.com/axvolkzki'
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'A brief description of Project Four.',
      image: images.projects.projectCattoo,
      tech: ['Angular', 'Django', 'PostgreSQL'],
      demoLink: '#',
      sourceCodeLink: 'https://github.com/axvolkzki'
    },
    // Add more projects as needed
  ]

  const certificates = [
    {
      id: 1,
      title: 'Go Certificate 2023',
      issuer: 'SoloLearn',
      date: 'March 06, 2023',
      image: images.certificates.CertGo2023,
      link: 'https://www.sololearn.com/certificates/CT-OPOPL8BP'
    },
    {
      id: 2,
      title: 'Kotlin Certificate 2023',
      issuer: 'SoloLearn',
      date: 'March 20, 2023',
      image: images.certificates.CertKotlin2023,
      link: 'https://www.sololearn.com/certificates/CT-MJI27BGB'
    },
    {
      id: 3,
      title: 'R Certificate 2023',
      issuer: 'SoloLearn',
      date: 'April 03, 2023',
      image: images.certificates.CertR2023,
      link: 'https://www.sololearn.com/certificates/CT-CRXVQXG4'
    },
    {
      id: 4,
      title: 'Ruby Certificate 2023',
      issuer: 'SoloLearn',
      date: 'April 03, 2024',
      image: images.certificates.CertRuby2023,
      link: 'https://www.sololearn.com/certificates/CT-X3IN8B2N'
    },
    // Add more certificates as needed
  ]

  const techstack = [
    {
      category: 'Frontend',
      technologies: [{
        name: 'React',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9-53.4 18.5-91.7 47.7-91.7 77.9 0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zM136.9 187.2c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zM115.7 320.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zM256 301.8a45.8 45.8 0 1 0 0-91.6 45.8 45.8 0 1 0 0 91.6z"/></svg>'
      },
      {
        name: 'Vue',
        icon: '#'
      },
      {
        name: 'Angular',
        icon: '#'
      },
      {
        name: 'HTML',
        icon: '#'
      },
      {
        name: 'CSS',
        icon: '#'
      },
      {
        name: 'JavaScript',
        icon: '#'
      },
      {
        name: 'TypeScript',
        icon: '#'
      }]
    },
    {
      category: 'Backend',
      technologies: [{
        name: 'Node.js',
        icon: '#'
      },
      {
        name: 'Express',
        icon: '#'
      },
      {
        name: 'Django',
        icon: '#'
      },
      {
        name: 'Flask',
        icon: '#'
      },
      {
        name: 'Ruby on Rails',
        icon: '#'
      }]
    },
    {
      category: 'Databases',
      technologies: [{
        name: 'MongoDB',
        icon: '#'
      },
      {
        name: 'MySQL',
        icon: '#'
      },
      {
        name: 'PostgreSQL',
        icon: '#'
      },
      {
        name: 'Firebase',
        icon: '#'
      }]
    },
    {
      category: 'Tools & Others',
      technologies: [{
        name: 'Git',
        icon: '#'
      },
      {
        name: 'Docker',
        icon: '#'
      },
      {
        name: 'AWS',
        icon: '#'
      },
      {
        name: 'Heroku',
        icon: '#'
      },
      {
        name: 'Netlify',
        icon: '#'
      }]
    }
  ]

  const renderProjects = () => (
    <div className='w-full h-full overflow-y-auto scrollbar-hide'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {projects.map(project => (
          <div 
            key={project.id} 
            className='relative p-0.5 rounded-lg bg-gradient-to-br from-accent-teal to-accent-lime hover:scale-105 transition-transform duration-300'
          >
            <div className='bg-surface rounded-md overflow-hidden h-full flex flex-col'>
              <Image
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-cover'
                width={400}
                height={200}
              />

              <div className='p-4 flex-1 flex flex-col'>
                <h3 className='text-lg font-semibold mb-2'>{project.title}</h3>
                <p className='text-sm text-text-secondary flex-1'>{project.description}</p>
                <div className='mt-4'>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <span className='inline-block bg-background text-text-secondary text-xs px-2 py-1 rounded-full mr-2 mb-2'>
                      Live Demo
                    </span>
                  </a>
                  <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer">
                    <span className='inline-block bg-background text-text-secondary text-xs px-2 py-1 rounded-full mr-2 mb-2'>
                      Source Code
                    </span>
                  </a>
                  {/* {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className='inline-block bg-background text-text-secondary text-xs px-2 py-1 rounded-full mr-2 mb-2'
                    >
                      {tech}
                    </span>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCertificates = () => (
  <div className='w-full h-full overflow-y-auto scrollbar-hide'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      {certificates.map(certificate => (
        <div 
          key={certificate.id} 
          className='relative p-0.5 rounded-lg bg-gradient-to-br from-accent-teal to-accent-lime hover:scale-105 transition-transform duration-300'
        >
          <div className='bg-surface rounded-md overflow-hidden h-full'>
            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className='absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-sm hover:bg-opacity-75 transition'>
              View
            </a>
            <Image 
              src={certificate.image} 
              alt={certificate.title} 
              className='w-full h-full object-cover' 
              width={250}
              height={250}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
  );

  const renderTechstack = () => (
    <div className='w-full h-full overflow-y-auto scrollbar-hide'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4'>
        {techstack.map(stack => (
          <div 
            key={stack.category} 
            className='relative p-0.5 rounded-lg bg-gradient-to-br from-accent-teal to-accent-lime group hover:scale-[1.02] transition-transform duration-300'
          >
            <div className='bg-surface rounded-md p-6 h-full'>
              {/* Category Header */}
              <h3 className='text-xl font-semibold mb-4 bg-gradient-to-r from-accent-teal to-accent-lime bg-clip-text text-transparent'>
                {stack.category}
              </h3>
              
              {/* Technologies Grid */}
              <div className='grid grid-cols-3 gap-4'>
                {stack.technologies.map(tech => (
                  <div 
                    key={tech.name}
                    className='flex flex-col items-center gap-2 p-3 rounded-lg bg-background hover:bg-border transition-colors duration-200 group/tech'
                  >
                    {/* Icon */}
                    <div className='w-12 h-12 relative'>
                      {/* <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className='object-contain group-hover/tech:scale-110 transition-transform duration-200'
                      /> */}
                    </div>

                    {/* svg icon fallback */}
                    <div
                      className='w-12 h-12 flex items-center justify-center'
                      dangerouslySetInnerHTML={{ __html: tech.svg || '' }}
                    />    
                    
                    {/* Tech Name */}
                    <span className='text-xs text-text-secondary group-hover/tech:text-foreground transition-colors duration-200 text-center'>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'projects':
        return renderProjects();
      case 'certificates':
        return renderCertificates();
      case 'techstack':
        return renderTechstack();
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
      <div className="w-full min-h-96 transition-all duration-300">
        {renderContent()}
      </div>
    </section>
  );
}
