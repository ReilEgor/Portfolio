import styles from "../styles.jsx";

import TechCategory from './TechCategory';

const TechGrid = () => (
    <section style={styles.techGrid}>
        <TechCategory title="Languages" items={['Golang', 'C++', 'Python', 'C#', 'Assembly TASM']} />
        <TechCategory title="Backend & Arch" items={['Microservices', 'gRPC', 'Gin / REST APIs', 'Clean Architecture', 'Dependency Injection']} />
        <TechCategory title="Infrastructure" items={['Docker', 'AWS', 'Prometheus', 'Grafana']} />
        <TechCategory title="Databases & Queues" items={['PostgreSQL', 'Redis', 'Elasticsearch', 'RabbitMQ']} />
    </section>
);

export default TechGrid