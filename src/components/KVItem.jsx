import React from "react";
import styles from '../styles.jsx';

const KVItem = ({ label, children, mono, style }) => (
    <li style={{ ...styles.kvItem, ...style }}>
        <span style={styles.kvKey}>{label}</span>
        <span style={mono ? styles.kvValMono : styles.kvVal}>{children}</span>
    </li>
);


export default KVItem;