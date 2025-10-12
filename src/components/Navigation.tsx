"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, isHomePage]);

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600';
  };

  if (!isHomePage) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <img src="/ChangeByDesignLogo.png" alt="Change By Design Logo" className="w-40" />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className={`${isActive('/')} font-medium`}>Home</Link>
              <Link href="/services" className={`${isActive('/services')} font-medium`}>Services</Link>
              <Link href="/about" className={`${isActive('/about')} font-medium`}>About</Link>
              <Link href="/assessments" className={`${isActive('/assessments')} font-medium`}>Assessments</Link>
              <Link href="/contact" className={`${isActive('/contact')} font-medium`}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md border-b' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className={`flex items-center transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
            <img src="/ChangeByDesignLogo.png" alt="Change By Design Logo" className="w-40" />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`${isActive('/')} font-medium`}>Home</Link>
            <Link href="/services" className={`${isActive('/services')} font-medium`}>Services</Link>
            <Link href="/about" className={`${isActive('/about')} font-medium`}>About</Link>
            <Link href="/assessments" className={`${isActive('/assessments')} font-medium`}>Assessments</Link>
            <Link href="/contact" className={`${isActive('/contact')} font-medium`}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
