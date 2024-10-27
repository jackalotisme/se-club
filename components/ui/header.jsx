import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <Link href="#">
        <Image src="/images/fsw-buc-logo.png" width={64} height={64} alt="School Logo" />
      </Link>
      <button className="md:hidden" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`md:flex ${menuOpen ? 'block' : 'hidden'} absolute top-14 left-0 w-full bg-white shadow md:static md:w-auto`}>
        <Link href="#about" className="block p-2">About</Link>
        <Link href="#events" className="block p-2">Events</Link>
        <Link href="#join" className="block p-2">Join Us</Link>
      </nav>
    </header>
  );
}
