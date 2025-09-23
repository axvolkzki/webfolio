"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  // function getMenuClasses() {
  //   let menuClasses = [];

  //   if (isOpen) {
  //     menuClasses = [
  //       "flex",
  //       "flex-col",
  //       "md:flex-row",
  //       "absolute",
  //       "top-[60px]",
  //       "bg-gray-800",
  //       "w-full",
  //       "p-2",
  //       "left-0",
  //       "gap-10",
  //     ];
  //   } else {
  //     menuClasses = [
  //       "hidden",
  //       "md:flex",
  //       "md:items-center",
  //       "md:gap-4",
  //     ];
  //   }

  //   return menuClasses.join(" ");
  // }

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of section visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const links = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "portfolio", label: "Portfolio" },
    { href: "contact", label: "Contact" },
  ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = ['about', 'projects', 'blogs', 'contact'];
  //     const scrollPosition = window.scrollY;

  //     sections.forEach((section) => {
  //       const element = document.getElementById(section);
  //       if (element) {
  //         const { offsetTop, clientHeight } = element;
  //         if (scrollPosition >= offsetTop && scrollPosition < offsetTop + clientHeight) {
  //           setActiveSection(section);
  //         }
  //       }
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    // <nav className="sticky top-0 bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
    // <nav className="sticky top-0 bg-gray-800 text-white p-2 md:flex md:justify-between md:items-center"></nav>
    
    <nav className="sticky top-0 bg-gray-800 text-white py-4 px-8 z-50 shadow-lg">
      <div className="container mx-auto flex justify-center items-center gap-6 md:gap-10">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={`#${href}`}
            className={`pb-1 cursor-pointer transition-colors ${
              activeSection === href
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "hover:text-gray-300"
            }`}
          >
            {label}
          </Link>
        ))}  
          
        {/* Logo */}
        {/* <a href="" className="text-2xl font-bold">
            WebFolio
        </a> */}

        {/* Navigation Links */}
        {/* <div className={getMenuClasses()}> */}
        {/* <div className="flex justify-center items-center gap-6 md:gap-10"> */}
          {/* <Link href="/" className="mx-2 hover:text-gray-300"> */}
          {/* <Link href="/" className="hover:text-gray-300">
            Home
          </Link> */}

          {/* <Link href="/about" className="mx-2 hover:text-gray-300"> */}
          {/* <Link href="/#about" className="hover:text-gray-300">
            About
          </Link>

          <Link href="/#projects" className="hover:text-gray-300">
            Projects
          </Link>

          <Link href="/#blogs" className="hover:text-gray-300">
            Blogs
          </Link>

          <Link href="/#contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div> */}

        {/* <div className="md:hidden flex items-center">
            <button onClick={() => {setIsOpen(!isOpen);}}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  { isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
              </svg>
            </button>
        </div> */}
      </div>
    </nav>
  );
}
