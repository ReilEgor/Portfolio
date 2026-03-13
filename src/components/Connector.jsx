import styles from "../styles.jsx";
import React from "react";

const Connector = () => (
    <div style={{ ...styles.connector, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <span style={{ color: '#333333', fontSize: '0.75rem', marginRight: '-4px' }}>&gt;</span>
    </div>
);

export default Connector;