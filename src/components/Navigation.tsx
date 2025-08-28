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
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-slate-900">Change By Design</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`${isActive('/')} font-medium`}>Home</Link>
            <Link href="/about" className={`${isActive('/about')} font-medium`}>About</Link>
            <Link href="/coaching" className={`${isActive('/coaching')} font-medium`}>Executive Coaching</Link>
            <Link href="/training" className={`${isActive('/training')} font-medium`}>Leadership Training</Link>
            <Link href="/programs" className={`${isActive('/programs')} font-medium`}>Programs</Link>
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
