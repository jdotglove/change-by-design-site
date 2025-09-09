"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="flex items-center">
            <img src="/ChangeByDesignLogo.png" alt="Change By Design Logo" className="w-48 mb-4" />
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
