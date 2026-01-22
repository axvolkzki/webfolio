'use client';

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { images } from '@/app/assets/images'
import { icons } from '@/app/assets/icons'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      id: 1,
      title: 'BookCol',
      description: 'Built a Kotlin-based mobile app for managing personal book collections with Firebase backend, featuring barcode scanning via device camera and Open Library API integration for automatic book information retrieval.',
      image: images.projects.projectCattoo,
      tech: ['Kotlin', 'Firebase', 'Open Library API', 'Android Studio'],
      demoLink: '#',
      sourceCodeLink: 'https://github.com/axvolkzki/MOBDEVE-MCO'
    },
    {
      id: 2,
      title: 'Online Enrollment System',
      description: 'Created a fault-tolerant Ruby on Rails enrollment platform with authentication and course management, utilizing Docker-based microservices architecture for independent scaling and failure isolation.',
      image: images.projects.projectCathuh,
      tech: ['Ruby on Rails', 'Docker'],
      demoLink: '#',
      sourceCodeLink: 'https://github.com/axvolkzki/STDISCM-P4'
    },
    {
      id: 3,
      title: 'Producer-Consumer Simulation',
      description: 'Developed a multi-threaded client-server system with socket-based communication, leaky bucket rate limiting, and a GUI for real-time video upload, preview, and playback.',
      image: images.projects.projectCattoo,
      tech: ['Ruby on Rails', 'Docker'],
      demoLink: '#',
      sourceCodeLink: 'https://github.com/kndonetm/stdiscm-p3-producer'
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
      category: 'Programming Languages',
      technologies: [{
        name: 'Java',
        icon: icons.techstack.java,
      },
      {
        name: 'JavaScript',
        icon: icons.techstack.javascript
      },
      {
        name: 'TypeScript',
        icon: icons.techstack.typescript
      },
      {
        name: 'Python',
        icon: icons.techstack.python
      },
      {
        name: 'Kotlin',
        icon: icons.techstack.kotlin
      },
      {
        name: 'Ruby',
        icon: icons.techstack.ruby
      },
      {
        name: 'SQL',
        icon: icons.techstack.sql
      }]
    },
    {
      category: 'Frameworks & Libraries',
      technologies: [{
        name: 'React',
        icon: icons.techstack.reactjs
      },
      {
        name: 'Next.js',
        icon: icons.techstack.nextjs
      },
      {
        name: 'Node.js',
        icon: icons.techstack.nodejs
      },
      {
        name: 'Spring Boot',
        icon: icons.techstack.springboot
      },
      {
        name: 'Tailwind CSS',
        icon: icons.techstack.tailwindcss
      }]
    },
    {
      category: 'Tools & Platforms',
      technologies: [{
        name: 'Docker',
        icon: icons.techstack.docker
      },
      {
        name: 'Firebase',
        icon: icons.techstack.firebase
      },
      {
        name: 'Git',
        icon: icons.techstack.git
      },
      {
        name: 'VS Code',
        icon: icons.techstack.vscode
      },
      {
        name: 'IntelliJ IDEA',
        icon: icons.techstack.intellij
      },
      {
        name: 'PyCharm',
        icon: icons.techstack.pycharm
      },
      {
        name: 'Android Studio',
        icon: icons.techstack.androidstudio
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
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className='object-contain group-hover/tech:scale-110 transition-transform duration-200'
                      />
                    </div>

                    {/* svg icon fallback */}
                    {/* <div
                      className='w-12 h-12 flex items-center justify-center'
                      dangerouslySetInnerHTML={{ __html: tech.icon || '' }}
                    />     */}
                    
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
