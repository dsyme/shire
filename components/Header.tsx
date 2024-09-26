import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a>Profile</a>
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
