'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      <nav className="w-full flex h-[56px] md:h-[64px]">
        {/* Logo Section (darker bg) */}
        <div className="flex items-center px-4 md:px-8 bg-[#d1d1d1] dark:bg-[#353535] min-w-[220px]">
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity duration-300">
            <Image 
              src={theme === 'dark' ? '/images/Logo1.png' : '/images/logolight.png'}
              alt="Logo" 
              width={78} 
              height={52} 
              className="object-contain"
              priority
            />
            <div className="font-roboto">
              <div className="text-xs md:text-sm font-bold leading-tight text-[#e53935]">RAJASTHAN</div>
              <div className="text-xs md:text-sm font-bold leading-tight text-[#bdbdbd] dark:text-gray-300" style={{color:'#757575'}}>AUTO DISTRIBUTORS</div>
            </div>
          </Link>
        </div>
        {/* Nav/Actions Section (lighter bg) */}
        <div className="flex-1 flex items-center justify-between bg-[#d1d1d1] dark:bg-[#353535] md:pr-8">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <Link 
              href="/" 
              className={`font-bold transition-all duration-200 relative pb-1 ${pathname === '/' ? 'text-[#e53935]' : 'text-gray-800 dark:text-white'} hover:text-[#e53935] ${pathname === '/' ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#e53935]' : ''} hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#e53935]`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`font-bold transition-all duration-200 relative pb-1 ${pathname === '/about' ? 'text-[#e53935]' : 'text-gray-800 dark:text-white'} hover:text-[#e53935] ${pathname === '/about' ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#e53935]' : ''} hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#e53935]`}
            >
              About
            </Link>
            <Link 
              href="/categories" 
              className={`font-bold transition-all duration-200 relative pb-1 ${pathname === '/categories' ? 'text-[#e53935]' : 'text-gray-800 dark:text-white'} hover:text-[#e53935] ${pathname === '/categories' ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#e53935]' : ''} hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 after:w-full hover:after:h-0.5 hover:after:bg-[#e53935]`}
            >
              Categories
            </Link>
            <Link 
              href="/mahindra-parts" 
              className={`font-bold transition-all duration-200 relative pb-1 ${pathname === '/mahindra-parts' ? 'text-[#e53935]' : 'text-gray-800 dark:text-white'} hover:text-[#e53935] ${pathname === '/mahindra-parts' ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#e53935]' : ''} hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#e53935]`}
            >
              Mahindra Parts
            </Link>
            <Link 
              href="/contact" 
              className={`font-bold transition-all duration-200 relative pb-1 ${pathname === '/contact' ? 'text-[#e53935]' : 'text-gray-800 dark:text-white'} hover:text-[#e53935] ${pathname === '/contact' ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#e53935]' : ''} hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#e53935]`}
            >
              Contact us
            </Link>
          </div>
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <a href="https://wa.me/919315933509" target="_blank" rel="noopener noreferrer" className="bg-[#e5397a] hover:bg-[#d81b60] text-white font-bold px-5 py-2 rounded-full shadow transition-all duration-200 text-sm md:text-base">
              Contact Us
            </a>
          </div>
          {/* Hamburger for mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden hamburger-button flex flex-col justify-center items-center w-7 h-7 ml-auto"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-5 h-0.5 bg-white mb-[4px] rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white mb-[4px] rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute top-0 right-0 h-full w-64 bg-[#bdbdbd] dark:bg-[#232323] shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20 dark:border-gray-600/30">
            <div className="flex items-center space-x-3">
              <Image 
                src={theme === 'dark' ? '/images/logoDark.png' : '/images/logolight.png'}
                alt="Logo" 
                width={40} 
                height={30} 
                className="object-contain"
              />
              <div className="font-roboto">
                <div className="text-xs font-bold leading-tight text-[#e53935]">RAJASTHAN</div>
                <div className="text-xs font-bold leading-tight text-[#757575]">AUTO DISTRIBUTORS</div>
              </div>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Mobile Navigation Links */}
          <div className="p-6 space-y-6">
            <Link 
              href="/" 
              onClick={closeMobileMenu}
              className={`block text-lg font-bold transition-all duration-200 pb-2 ${pathname === '/' ? 'text-[#e53935]' : 'text-gray-800 dark:text-white'} hover:text-[#e53935] ${pathname === '/' ? 'border-b-2 border-[#e53935]' : ''} hover:border-b-2 hover:border-[#e53935]`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={closeMobileMenu}
              className={`block text-lg font-bold transition-all duration-200 pb-2 ${pathname === '/about' ? 'text-[#e53935]' : 'text-gray-800 dark:text-white'} hover:text-[#e53935] ${pathname === '/about' ? 'border-b-2 border-[#e53935]' : ''} hover:border-b-2 hover:border-[#e53935]`}
            >
              About
            </Link>
            <Link 
              href="/categories" 
              onClick={closeMobileMenu}
              className={`block text-lg font-bold transition-all duration-200 pb-2 ${pathname === '/categories' ? 'text-[#e53935]' : 'text-gray-800 dark:text-white'} hover:text-[#e53935] ${pathname === '/categories' ? 'border-b-2 border-[#e53935]' : ''} hover:border-b-2 hover:border-[#e53935]`}
            >
              Categories
            </Link>
            <Link 
              href="/mahindra-parts" 
              onClick={closeMobileMenu}
              className={`block text-lg font-bold transition-all duration-200 pb-2 ${pathname === '/mahindra-parts' ? 'text-[#e53935]' : 'text-gray-800 dark:text-white'} hover:text-[#e53935] ${pathname === '/mahindra-parts' ? 'border-b-2 border-[#e53935]' : ''} hover:border-b-2 hover:border-[#e53935]`}
            >
              Mahindra Parts
            </Link>
            <Link 
              href="/contact" 
              onClick={closeMobileMenu}
              className={`block text-lg font-bold transition-all duration-200 pb-2 ${pathname === '/contact' ? 'text-[#e53935]' : 'text-gray-800 dark:text-white'} hover:text-[#e53935] ${pathname === '/contact' ? 'border-b-2 border-[#e53935]' : ''} hover:border-b-2 hover:border-[#e53935]`}
            >
              Contact us
            </Link>
          </div>
          {/* Mobile Theme Toggle and Contact Button */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/20 dark:border-gray-600/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-800 dark:text-white text-sm font-medium">Theme</span>
              <ThemeToggle />
            </div>
            <a 
              href="https://wa.me/919315933509" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="block w-full bg-[#e5397a] hover:bg-[#d81b60] text-white font-bold py-3 px-6 rounded-full shadow transition-all duration-200 text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
