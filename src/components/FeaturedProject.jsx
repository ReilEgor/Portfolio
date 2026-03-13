import styles from "../styles.jsx";
import Connector from './Connector';
import AchievementItem from './AchievementItem';

const FeaturedProject = () => (
    <section style={styles.panel}>
        <h2 style={styles.h2}>
            <svg style={styles.refIcon} viewBox="0 0 24 24">
                <path d="M8 6l-6 6 6 6m8-12l6 6-6 6M15 4l-6 16" />
            </svg>
            Featured Protocol
        </h2>

        <div style={styles.projectHeader}>
            <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '8px', color: '#f4f4f4' }}>
                    VACA // Job Aggregator Platform
                </h3>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: '#8a8a8a' }}>
                    Role: Backend Developer
                </p>
            </div>
            <div style={styles.projectMeta}>JAN 2025 — PRESENT</div>
        </div>

        <div style={styles.archDiagram}>
            <div style={styles.node}>5+ Scrapers</div>
            <Connector />
            <div style={styles.nodeAccent}>RabbitMQ</div>
            <Connector />
            <div style={styles.node}>Go Microservices</div>
            <Connector />
            <div style={styles.node}>PGSQL + Elastic</div>
        </div>

        <p style={{ color: '#8a8a8a' }}>
            Engineered the backend infrastructure for a high-throughput job aggregation platform handling vast daily data ingestion.
        </p>

        <ul style={{ listStyle: 'none', marginTop: '24px', textAlign: 'left' }}>
            {[
                <>Architected and implemented a microservices ecosystem utilizing <code style={styles.codeEl}>gRPC</code> for high-performance inter-service communication.</>,
                <>Designed asynchronous processing pipelines using <code style={styles.codeEl}>RabbitMQ</code>, enabling the system to reliably ingest and process over <strong style={{ color: '#f4f4f4', fontWeight: '500' }}>10,000+ daily vacancies</strong>.</>,
                <>Developed and maintained custom scrapers extracting structured data from 3+ disparate external sources.</>,
                <>Optimized query performance and search capabilities by integrating <code style={styles.codeEl}>Elasticsearch</code> alongside primary <code style={styles.codeEl}>PostgreSQL</code> storage.</>,
                <>Containerized the entire infrastructure using <code style={styles.codeEl}>Docker</code>, ensuring consistent deployment environments and scalability.</>,
            ].map((item, i) => (
                <AchievementItem key={i}>{item}</AchievementItem>
            ))}
        </ul>
    </section>
);

export default FeaturedProject