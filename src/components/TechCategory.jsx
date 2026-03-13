import styles from "../styles.jsx";
import React from "react";

const TechCategory = ({ title, items }) => (
    <div style={styles.techCategory}>
        <div style={styles.techCategoryTitle}>{title}</div>
        <ul style={styles.techList}>
            {items.map((item, i) => (
                <li key={i} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.85rem',
                    color: '#f4f4f4',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <span style={{ color: '#555555', marginRight: '8px', fontSize: '0.75rem' }}>&gt;</span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);
export default TechCategory;