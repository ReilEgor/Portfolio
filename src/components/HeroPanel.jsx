import styles from "../styles.jsx";
import TechCategory from "./TechCategory.jsx";
import React from "react";
import BrandMark from './BrandMark';

const HeroPanel = () => (
    <header style={styles.heroPanel}>
        <div style={styles.sysBadge}>SYS.READY</div>
        <h1 style={styles.h1}>
            Yehor Reil
            <BrandMark />
        </h1>
        <span style={styles.roleTitle}>GOLANG BACKEND DEVELOPER</span>
        <p style={styles.summaryText}>
            Specializing in the <strong style={{ color: '#f4f4f4', fontWeight: '500' }}>Go ecosystem</strong> to build resilient,
            highly scalable backend systems. Deep focus on microservices utilizing{' '}
            <strong style={{ color: '#f4f4f4', fontWeight: '500' }}>Clean Architecture</strong> and{' '}
            <strong style={{ color: '#f4f4f4', fontWeight: '500' }}>Dependency Injection</strong>{' '}
            <code style={styles.codeEl}>(Wire)</code>. Experienced in designing asynchronous data pipelines
            and optimizing complex data stores across heterogeneous environments.
        </p>
    </header>
);

export default HeroPanel;