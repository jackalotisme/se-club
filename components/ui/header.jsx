import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Handle keyboard interaction for the menu button
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleMenu();
    }
  };

  // Smooth scroll handler
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor link behavior
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="flex items-center justify-between p-4">
      <Link href="#">
        <Image src="/images/fsw-buc-logo.png" width={64} height={64} alt="School Logo" />
      </Link>

      {/* Mobile menu toggle button */}
      <button
        className="md:hidden"
        onClick={toggleMenu}
        onKeyDown={handleKeyDown} // Allow keyboard interaction
        aria-label="Toggle menu"
        aria-expanded={menuOpen ? 'true' : 'false'} // Update aria-expanded based on menu state
      >
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black"></span>
      </button>

      {/* Mobile Menu */}
      <nav
        ref={menuRef} // Reference to manage focus
        className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:static bg-white shadow opacity-70 md:opacity-100 transition-opacity`}
      >
        <div className="w-full flex justify-center md:justify-end md:w-auto">
          <Link href="#about" className="block p-2" onClick={(e) => handleSmoothScroll(e, 'about')}>
            About
          </Link>
          <Link href="#events" className="block p-2" onClick={(e) => handleSmoothScroll(e, 'events')}>
            Events
          </Link>
          <Link href="#join" className="block p-2" onClick={(e) => handleSmoothScroll(e, 'join')}>
            Join Us
          </Link>
          <Link href="#testimonials" className="block p-2" onClick={(e) => handleSmoothScroll(e, 'testimonials')}>
            Testimonials
          </Link>
        </div>
      </nav>
    </header>
  );
}
