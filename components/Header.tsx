import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ fontFamily: 'Lato, sans-serif', backgroundColor: '#f8f8f8', color: '#333', padding: '10px 20px' }}>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
          <li style={{ marginRight: '20px' }}>
            <Link href="/">
              <a style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#555'} onMouseOut={(e) => e.currentTarget.style.color = '#333'}>
                Home
              </a>
            </Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link href="/dashboard">
              <a style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#555'} onMouseOut={(e) => e.currentTarget.style.color = '#333'}>
                Dashboard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#555'} onMouseOut={(e) => e.currentTarget.style.color = '#333'}>
                Profile
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <input type="text" placeholder="Search..." style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', transition: 'border-color 0.3s' }} onFocus={(e) => e.currentTarget.style.borderColor = '#999'} onBlur={(e) => e.currentTarget.style.borderColor = '#ccc'} />
        <button style={{ padding: '5px 10px', marginLeft: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#333', color: '#fff', cursor: 'pointer', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}>
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
