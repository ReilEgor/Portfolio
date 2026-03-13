import KVItem from "./KVItem.jsx";

const BrandMark = () => (
    <div style={{ width: '40px', height: '40px', position: 'relative', display: 'inline-block' }}>
        <div style={{
            position: 'absolute', top: '50%', left: 0, right: 0, height: '3px',
            background: '#F05D38', transform: 'translateY(-50%)'
        }} />
        <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0, width: '3px',
            background: '#F05D38', transform: 'translateX(-50%)'
        }} />
        <div style={{
            position: 'absolute', top: 0, right: 0, width: '14px', height: '14px',
            borderTop: '3px solid #F05D38', borderRight: '3px solid #F05D38',
            transform: 'translate(2px, -2px)'
        }} />
        <div style={{
            position: 'absolute', bottom: 0, left: 0, width: '14px', height: '14px',
            borderTop: '3px solid #F05D38', borderRight: '3px solid #F05D38',
            transform: 'rotate(180deg) translate(2px, -2px)'
        }} />
    </div>
);

export default BrandMark;