import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{ fontFamily: 'Lato, sans-serif', backgroundColor: '#f8f8f8', color: '#333', padding: '10px 20px' }}>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
          <li style={{ marginRight: '20px' }}>
            <Link href="/terms">
              <a style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#555'} onMouseOut={(e) => e.currentTarget.style.color = '#333'}>
                Terms of Service
              </a>
            </Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link href="/privacy">
              <a style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#555'} onMouseOut={(e) => e.currentTarget.style.color = '#333'}>
                Privacy Policy
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#555'} onMouseOut={(e) => e.currentTarget.style.color = '#333'}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
          <li style={{ marginRight: '20px' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#555'} onMouseOut={(e) => e.currentTarget.style.color = '#333'}>
              Facebook
            </a>
          </li>
          <li style={{ marginRight: '20px' }}>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#555'} onMouseOut={(e) => e.currentTarget.style.color = '#333'}>
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#555'} onMouseOut={(e) => e.currentTarget.style.color = '#333'}>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
