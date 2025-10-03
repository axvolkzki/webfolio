"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
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

  return (
    <nav className="sticky top-0 bg-surface text-white py-4 px-28 z-50 shadow-lg">
      <div className="container mx-auto flex justify-end items-center gap-6 md:gap-10">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={`#${href}`}
            className={`pb-1 cursor-pointer transition-all duration-300 ${
              activeSection === href
                ? "bg-gradient-to-r from-accent-teal to-accent-lime bg-clip-text text-transparent border-b-2 border-accent-teal"
                : "text-foreground hover:text-accent-teal"
            }`}
          >
            {label}
          </Link>
        ))}  
          
        {/* Logo */}
        {/* <a href="" className="text-2xl font-bold">
            WebFolio
        </a> */}
      </div>
    </nav>
  );
}
