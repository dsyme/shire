import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentEditor from '../components/ContentEditor';
import Analytics from '../components/Analytics';
import SubscriptionManager from '../components/SubscriptionManager';

const Dashboard = () => {
  return (
    <div style={{ fontFamily: 'Lato, sans-serif', color: '#333' }}>
      <Header />
      <main>
        <section>
          <h2>Content Creation</h2>
          <ContentEditor />
        </section>
        <section>
          <h2>Content Management</h2>
          {/* Add content management components here */}
        </section>
        <section>
          <h2>Analytics</h2>
          {/* <Analytics /> */}
        </section>
      </main>
      <aside>
        <nav>
          <ul>
            <li><a href="/profile" style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#555'} onMouseOut={(e) => e.currentTarget.style.color = '#333'}>Profile</a></li>
            <li><a href="/settings" style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#555'} onMouseOut={(e) => e.currentTarget.style.color = '#333'}>Settings</a></li>
            <li><a href="/subscriptions" style={{ textDecoration: 'none', color: '#333', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#555'} onMouseOut={(e) => e.currentTarget.style.color = '#333'}>Subscription Management</a></li>
          </ul>
        </nav>
      </aside>
      <Footer />
    </div>
  );
};

export default Dashboard;
