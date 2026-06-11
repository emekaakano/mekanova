import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          backgroundColor: '#0f172a',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Violet left accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '8px',
            height: '100%',
            background: 'linear-gradient(to bottom, #7c3aed, #a855f7)',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 40px 80px 100px',
            flex: 1,
          }}
        >
          {/* Eyebrow pill */}
          <div
            style={{
              display: 'flex',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                backgroundColor: '#1e1b4b',
                border: '1px solid #4c1d95',
                borderRadius: '6px',
                padding: '6px 18px',
                color: '#a78bfa',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'flex',
              }}
            >
              AI Build Project Journey
            </div>
          </div>

          {/* Wordmark */}
          <div
            style={{
              fontSize: '104px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              marginBottom: '28px',
              display: 'flex',
            }}
          >
            Mekanova
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '28px',
              color: '#94a3b8',
              lineHeight: 1.45,
              maxWidth: '720px',
              marginBottom: '52px',
              display: 'flex',
            }}
          >
            Helping organisations close the gap between AI strategy and real outcomes.
          </div>

          {/* URL row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '3px',
                backgroundColor: '#7c3aed',
                display: 'flex',
              }}
            />
            <div
              style={{
                fontSize: '22px',
                color: '#64748b',
                letterSpacing: '0.04em',
                display: 'flex',
              }}
            >
              mekanova.dev
            </div>
          </div>
        </div>

        {/* Decorative large M — ghost watermark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '280px',
            paddingRight: '60px',
          }}
        >
          <div
            style={{
              fontSize: '320px',
              fontWeight: 900,
              color: '#7c3aed',
              lineHeight: 1,
              opacity: 0.07,
              display: 'flex',
            }}
          >
            M
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
