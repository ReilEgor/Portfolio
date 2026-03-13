import React from "react";

const AchievementItem = ({ children }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <li
            style={{
                position: 'relative',
                paddingLeft: '24px',
                marginBottom: '16px',
                color: '#8a8a8a',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
      <span style={{
          position: 'absolute',
          left: 0,
          top: '8px',
          width: '6px',
          height: '6px',
          background: hovered ? '#F05D38' : '#333333',
          display: 'inline-block',
          transition: 'background 0.2s',
      }} />
            {children}
        </li>
    );
};



export default AchievementItem