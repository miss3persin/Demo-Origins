'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'; // Import the icons

export default function Header({ title = '', fixed = false }) {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const storedPreference = localStorage.getItem('theme');
    if (storedPreference === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Handle scroll behavior only if fixed prop is passed
  useEffect(() => {
    if (fixed) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          setScrollDirection('down');
        } else {
          setScrollDirection('up');
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [fixed, lastScrollY]);

  return (
    <header
      className={`${
        fixed
          ? 'fixed top-0 left-0 right-0 z-50 transition-transform duration-300'
          : 'static'
      } flex justify-between items-center py-4 px-10 bg-white dark:bg-black dark:border-b border-[#ACA992] shadow-md ${
        fixed && scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex items-center cursor-pointer" onClick={() => router.push('/')}>
        <img src="/author-profile.jpg" alt="Author" className="h-12 w-12 rounded-full" />
        <div className="ml-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-[#ACA992]">Demo Origins</h1>
          <p className="text-sm text-gray-900 dark:text-[#ACA992]">By miss3persin</p>
        </div>
      </div>

      <div>
        <p className="text-base font-bold text-gray-900 dark:text-[#ACA992]">{title}</p>
      </div>

      <div className="flex items-center space-x-4">
        <a
          href="https://buymeacoffee.com/miss3persin"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 transition-all ease-in-out duration-200 hover:bg-transparent hover:text-black dark:bg-transparent dark:text-[#ACA992] border border-blue-500 dark:border-[#ACA992] dark:hover:text-black dark:hover:bg-[#ACA992] text-white px-4 py-2 rounded"
        >
          Buy Me a Coffee
        </a>
        <a
          href="https://dynamic.webnovel.com/download"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 transition-all ease-in-out duration-200 hover:bg-transparent hover:text-black dark:bg-transparent dark:text-[#ACA992] border border-blue-500 dark:border-[#ACA992] dark:hover:text-black dark:hover:bg-[#ACA992] text-white px-4 py-2 rounded"
        >
          Read on App
        </a>
        <button
          onClick={toggleDarkMode}
          className="bg-transparent text-gray-700 dark:text-white px-4 py-2 rounded"
        >
          {darkMode ? (
            <SunIcon className="h-7 w-7 text-yellow-400" /> // SunIcon for dark mode
          ) : (
            <MoonIcon className="h-7 w-7 text-gray-900" /> // MoonIcon for light mode
          )}
        </button>
      </div>
    </header>
  );
}
