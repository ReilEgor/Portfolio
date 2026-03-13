import React, { useEffect } from 'react';
import styles from './styles.jsx';

import TechCategory from './components/TechCategory';
import Sidebar from './components/Sidebar';
import HeroPanel from './components/HeroPanel';

import FeaturedProject from './components/FeaturedProject';
import CtaPanel from './components/CtaPanel';



const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@100;400;700&display=swap');
      * { box-sizing: border-box; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      body { background-color: #070707; }
      @media (max-width: 1024px) {
        .system-frame-responsive { grid-template-columns: 1fr !important; }
        .tech-grid-responsive { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (max-width: 600px) {
        .tech-grid-responsive { grid-template-columns: 1fr !important; }
        .hero-h1 { font-size: 2.5rem !important; flex-wrap: wrap; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
      <div style={styles.body}>
        <div className="system-frame-responsive" style={styles.systemFrame}>
          <Sidebar />
          <main style={styles.mainContent}>
            <HeroPanel />
            <div className="tech-grid-responsive" style={styles.techGrid}>
              <TechCategory title="Languages" items={['Golang', 'C++', 'Python', 'Assembly TASM']} />
              <TechCategory title="Backend & Arch" items={['Microservices', 'gRPC', 'Gin ',' REST APIs', 'Clean Arch', 'DI']} />
              <TechCategory title="Infrastructure" items={['Docker', 'AWS', 'Prometheus', 'Grafana']} />
              <TechCategory title="Databases & Queues" items={['PostgreSQL', 'Redis', 'Elasticsearch', 'RabbitMQ']} />
            </div>
            <FeaturedProject />
            <CtaPanel />
          </main>
        </div>
      </div>
  );
};

export default App;