import styles from "../styles.jsx";
import BrandMark from "./BrandMark.jsx";
import TechCategory from "./TechCategory.jsx";
import Connector from "./Connector.jsx";
import React from "react";
import KVItem from './KVItem';
import myPhotoUrl from '../assets/YehorReil.png';

const Sidebar = () => (
    <aside style={styles.sidebar}>
        <div style={{ ...styles.profilePicContainer, padding: 0 }}>
            <img
                src={myPhotoUrl}
                alt="Yehor Reil"
                className={styles.profilePhoto}
            />
        </div>

        <div style={styles.panel}>
            <h2 style={styles.h2}>
                <svg style={styles.refIcon} viewBox="0 0 24 24">
                    <path d="M16 4h4v4m0-4L12 12m-8 8v-4h4m-4 4l8-8" />
                </svg>
                Contact.cfg
            </h2>
            <ul style={styles.kvList}>
                <KVItem label="Location">Kyiv, Ukraine</KVItem>
                <KVItem label="Phone" mono>+380 66 042 79 31</KVItem>
                <KVItem label="Email">
                    <a href="mailto:egorrejl44@gmail.com" style={{
                        color: '#f4f4f4', textDecoration: 'none',
                        borderBottom: '1px solid #333333', transition: 'all 0.2s ease'
                    }}
                       onMouseEnter={e => { e.target.style.color = '#F05D38'; e.target.style.borderBottomColor = '#F05D38'; }}
                       onMouseLeave={e => { e.target.style.color = '#f4f4f4'; e.target.style.borderBottomColor = '#333333'; }}
                    >egorrejl44@gmail.com</a>
                </KVItem>
                <KVItem label="Network">
                    <a href="https://github.com/ReilEgor" style={{
                        color: '#f4f4f4', textDecoration: 'none',
                        borderBottom: '1px solid #333333', transition: 'all 0.2s ease'
                    }}
                       onMouseEnter={e => { e.target.style.color = '#F05D38'; e.target.style.borderBottomColor = '#F05D38'; }}
                       onMouseLeave={e => { e.target.style.color = '#f4f4f4'; e.target.style.borderBottomColor = '#333333'; }}
                    >GitHub</a>
                    {' // '}
                    <a href="https://www.linkedin.com/in/yehor-reil-622543385" style={{
                        color: '#f4f4f4', textDecoration: 'none',
                        borderBottom: '1px solid #333333', transition: 'all 0.2s ease'
                    }}
                       onMouseEnter={e => { e.target.style.color = '#F05D38'; e.target.style.borderBottomColor = '#F05D38'; }}
                       onMouseLeave={e => { e.target.style.color = '#f4f4f4'; e.target.style.borderBottomColor = '#333333'; }}
                    >LinkedIn</a>
                </KVItem>
            </ul>
        </div>

        <div style={styles.panel}>
            <h2 style={styles.h2}>
                <svg style={styles.refIcon} viewBox="0 0 24 24">
                    <path d="M12 4v16m-8-8h16" />
                </svg>
                Education
            </h2>
            <ul style={{...styles.kvList,  textAlign: 'left'}}>
                <li style={styles.kvItem}>
                    <span style={styles.kvKey}>2024 - 2028(expected)</span>
                    <span style={styles.kvVal}>National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”</span>
                    <span style={{ color: '#8a8a8a', fontSize: '0.85rem' }}>Software Engineering</span>
                </li>
                <li style={{ ...styles.kvItem, marginTop: '16px' }}>
                    <span style={styles.kvKey}>Certification // 2024</span>
                    <span style={styles.kvVal}>Cisco Networking Academy</span>
                </li>
            </ul>
        </div>

        <div style={{ ...styles.panelSurface, flexGrow: 1, textAlign: 'left' }}>
            <h2 style={styles.h2}>Languages</h2>
            <ul style={styles.kvList}>
                <KVItem label="English">B1/B2 (Technical)</KVItem>
                <KVItem label="Ukrainian">Native</KVItem>
            </ul>
        </div>
    </aside>
);
export default Sidebar