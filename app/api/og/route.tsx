import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

import { BRAND_NAME, DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_HOST } from '@/lib/site';

export const runtime = 'nodejs';

const size = {
  width: 1200,
  height: 630
};

const contentType = 'image/png';

let logoDataUrlPromise: Promise<string> | null = null;

function clamp(value: string | null, fallback: string, maxLength: number) {
  const nextValue = value?.trim();

  if (!nextValue) {
    return fallback;
  }

  if (nextValue.length <= maxLength) {
    return nextValue;
  }

  return `${nextValue.slice(0, maxLength - 1).trimEnd()}...`;
}

async function getLogoDataUrl() {
  if (!logoDataUrlPromise) {
    logoDataUrlPromise = readFile(
      join(process.cwd(), 'public', 'brand', 'aifloxium-logo.png'),
      'base64'
    ).then((data) => `data:image/png;base64,${data}`);
  }

  return logoDataUrlPromise;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = clamp(searchParams.get('title'), DEFAULT_TITLE, 110);
  const description = clamp(searchParams.get('description'), DEFAULT_DESCRIPTION, 180);
  const eyebrow = clamp(searchParams.get('eyebrow'), 'AI Automation Systems', 36);
  const path = clamp(searchParams.get('path'), SITE_HOST, 72);
  const logoSrc = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background:
            'radial-gradient(circle at top left, rgba(255,107,0,0.30), transparent 36%), radial-gradient(circle at 85% 15%, rgba(151,71,255,0.24), transparent 28%), linear-gradient(135deg, #04050b 0%, #09111f 52%, #16091d 100%)',
          color: '#f7efe7',
          fontFamily: 'sans-serif'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '28px',
            display: 'flex',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '28px',
            background: 'rgba(255,255,255,0.04)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-60px',
            width: '300px',
            height: '300px',
            display: 'flex',
            borderRadius: '9999px',
            background: 'rgba(255,107,0,0.18)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-120px',
            left: '-40px',
            width: '320px',
            height: '320px',
            display: 'flex',
            borderRadius: '9999px',
            background: 'rgba(125,91,255,0.16)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                maxWidth: '780px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '54px',
                    height: '54px',
                    borderRadius: '18px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.14)'
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logoSrc}
                    alt=""
                    width="34"
                    height="34"
                    style={{ display: 'flex', borderRadius: '9999px' }}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      fontSize: '16px',
                      letterSpacing: '0.30em',
                      textTransform: 'uppercase',
                      color: '#ffb27a'
                    }}
                  >
                    {eyebrow}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      fontSize: '22px',
                      fontWeight: 700
                    }}
                  >
                    {BRAND_NAME}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: '66px',
                  lineHeight: 1.03,
                  fontWeight: 800,
                  letterSpacing: '-0.04em'
                }}
              >
                {title}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: '28px',
                  lineHeight: 1.35,
                  color: 'rgba(247,239,231,0.78)',
                  maxWidth: '860px'
                }}
              >
                {description}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                minWidth: '190px',
                justifyContent: 'flex-end'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginTop: '6px'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: '150px',
                    height: '10px',
                    borderRadius: '9999px',
                    background:
                      'linear-gradient(90deg, rgba(255,107,0,1) 0%, rgba(255,150,92,0.55) 100%)'
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    width: '108px',
                    height: '10px',
                    borderRadius: '9999px',
                    background:
                      'linear-gradient(90deg, rgba(125,91,255,1) 0%, rgba(125,91,255,0.18) 100%)'
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                fontSize: '20px',
                color: 'rgba(247,239,231,0.74)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '14px',
                  height: '14px',
                  borderRadius: '9999px',
                  background: '#ff6b00',
                  boxShadow: '0 0 28px rgba(255,107,0,0.7)'
                }}
              />
              {path}
            </div>
            <div
              style={{
                display: 'flex',
                padding: '14px 20px',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.16)',
                background: 'rgba(255,255,255,0.05)',
                fontSize: '20px',
                color: 'rgba(247,239,231,0.82)'
              }}
            >
              AI systems, automation, SEO
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}

export { contentType, size };
