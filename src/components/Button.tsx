import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export default function Button({ 
  href, 
  variant = 'primary', 
  children, 
  className = '',
  showIcon = true
}: ButtonProps) {
  const baseClasses = 'group relative inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 ease-in-out';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md hover:shadow-lg hover:shadow-blue-500/40',
    secondary: 'bg-white text-blue-700 border-2 border-blue-200 shadow-md hover:bg-blue-50 hover:border-blue-300',
  };

  const iconClasses = "transition-all duration-300 ease-in-out h-5 opacity-0 w-0 group-hover:w-5 group-hover:opacity-100 group-hover:ml-2";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <span>{children}</span>
      {showIcon && <ArrowRightIcon className={iconClasses} />}
    </Link>
  );
}
