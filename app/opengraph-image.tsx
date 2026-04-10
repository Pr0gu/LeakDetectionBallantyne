import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Leak Detection Ballantyne — Non-invasive leak detection in Ballantyne NC';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0A1628',
          backgroundImage: 'linear-gradient(135deg, #132240 0%, #0A1628 100%)',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#00B4D8' }} />
          <div style={{ color: '#00B4D8', fontSize: '24px', fontWeight: 700, letterSpacing: '4px' }}>
            LEAK DETECTION BALLANTYNE
          </div>
        </div>
        <div style={{ color: '#FFFFFF', fontSize: '88px', fontWeight: 900, lineHeight: 1, letterSpacing: '-2px' }}>
          Find the leak.
        </div>
        <div style={{ color: '#48CAE4', fontSize: '88px', fontWeight: 900, lineHeight: 1, letterSpacing: '-2px' }}>
          Save the floor.
        </div>
        <div style={{ color: '#A8B8C8', fontSize: '28px', marginTop: '28px' }}>
          Non-invasive · 24/7 Emergency · 980-405-4186
        </div>
      </div>
    ),
    { ...size }
  );
}
