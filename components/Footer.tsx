import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link href="/terms">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/privacy">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
