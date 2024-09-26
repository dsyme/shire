import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to shire</h1>
        <nav>
          <ul>
            <li>
              <Link href="/signup">
                Sign Up
              </Link>
            </li>
            <li>
              <Link href="/login">
                Log In
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
