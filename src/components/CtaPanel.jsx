import React from "react";

import styles from "../styles.jsx";

const CtaPanel = () => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <a
            href="mailto:egorrejl44@gmail.com"
            style={{
                ...styles.ctaPanel,
                backgroundColor: hovered ? '#ff6a45' : '#F05D38',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span style={styles.ctaText}>Initialize Contact Protocol</span>
            <svg
                viewBox="0 0 24 24"
                style={{
                    stroke: '#070707',
                    width: '48px',
                    height: '48px',
                    fill: 'none',
                    strokeWidth: '2',
                    strokeLinecap: 'square',
                    strokeLinejoin: 'miter',
                }}
            >
                <path d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
        </a>
    );
};



export default CtaPanel;