import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;
