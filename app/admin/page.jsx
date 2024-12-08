'use client'

import React, {useState,useRef,useCallback,useEffect} from 'react'
import { Settings, LogOut } from 'lucide-react'
import CalendarAndEvents from '@/components/ui/Sections/calendar-events'
import Members from '@/components/ui/Sections/members'
import Link from 'next/link'

export default function AdminDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Toggle the menu open/close state
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  // Handle keyboard interaction for the menu button
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleMenu();
    }
  };

  // Smooth scroll handler (Reusable function)
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor link behavior
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    // Close the menu after clicking the link
    setMenuOpen(false);
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus the first menu link when the menu is opened
  useEffect(() => {
    if (menuOpen) {
      const firstLink = menuRef.current.querySelector('a');
      firstLink?.focus();
    } else {
      buttonRef.current?.focus();
    }
  }, [menuOpen]);
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <header className="px-4 lg:px-6 h-14 flex items-center my-4">
          {/* Mobile menu toggle button */}
          <button
            ref={buttonRef} // Keep track of the button for focus management
            className="focus:outline-none absolute right-4 block md:hidden" // Ensure the button is always visible on all screen sizes
            onClick={toggleMenu}
            onKeyDown={handleKeyDown} // Allow keyboard interaction
            aria-label="Toggle menu"
            aria-expanded={menuOpen ? 'true' : 'false'} // Update aria-expanded based on menu state
            aria-controls="mobile-menu" // Associating with the mobile menu
          >
            <span className="block w-6 h-1 bg-black ml-1 mb-1 mr-2 mt-3" />
            <span className="block w-6 h-1 bg-black ml-1 mb-1 mr-2" />
            <span className="block w-6 h-1 bg-black ml-1 mr-2" />
          </button>

          {/* Mobile Menu (Side menu) */}
          <nav
            ref={menuRef} // Reference to manage focus
            id="mobile-menu"
            className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-2xl text-black focus:outline-none"
              aria-label="Close menu"
            >
              ×
            </button>

            <div className="flex flex-col justify-center items-center h-full">
              <Link
                href="#settings"
                className="block p-4 text-lg"
                onClick={(e) => handleSmoothScroll(e, 'testimonials')}
                aria-label="Navigate to Testimonials section"
              >
                <div className="flex">
                  <Settings className="w-5 h-5 mt-1 mr-2" />
                  Settings
                </div>
              </Link>
              <Link
                href="/app/page"
                className="block p-4 text-lg"
                onClick={(e) => handleSmoothScroll(e, 'join')}
                aria-label="Navigate to Join Us section"
              >
                <div className="flex">
                  <LogOut className="w-5 h-5 mt-1 mr-2" />
                  Logout
                </div>
              </Link>
            </div>
          </nav>
        </header>
      {/* Sidebar */}
      <aside className="w-64 hidden lg:block bg-white shadow-md">
        <nav className="mt-6">
          <Link href="#" className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </Link>
          <Link href="/" className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mr-4 mb-6">Admin Dashboard</h1>

        <Members />
        <CalendarAndEvents />

      </main>
    </div>
    </>
  )
}