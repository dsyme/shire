import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div style={{ fontFamily: 'Lato, sans-serif', color: '#333' }}>
      <header>
        <h1>Welcome to shire</h1>
        <nav>
          <ul>
            <li>
              <Link href="/signup">
                <a style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#555'} onMouseOut={(e) => e.currentTarget.style.color = '#333'}>
                  Sign Up
                </a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#555'} onMouseOut={(e) => e.currentTarget.style.color = '#333'}>
                  Log In
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Trending Content</h2>
          {/* Add components or code to display trending content */}
        </section>
        <section>
          <h2>Personalized Recommendations</h2>
          {/* Add components or code to display personalized recommendations */}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
