'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { usePathname } from 'next/navigation';
import { DownloadLink } from './DownloadLink';

const navItems: { href: Route; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/tutorial', label: 'Tutorial' },
  { href: '/blog', label: 'Blog' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' }
];

export function VisitorShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top, rgba(59,130,246,0.14), transparent 32%), linear-gradient(135deg, #f8fbff, #edf3ff 30%, #f3f0ff 100%)',
        color: '#101828',
        fontFamily: 'Arial, Helvetica, sans-serif'
      }}
    >
      <header style={{ position: 'sticky', top: 0, zIndex: 20, backdropFilter: 'blur(18px)', background: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.35)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                background: 'linear-gradient(135deg, rgba(185,28,28,0.9), rgba(37,99,235,0.9))',
                color: '#fff',
                display: 'grid',
                placeItems: 'center',
                fontWeight: 800,
                boxShadow: '0 16px 35px rgba(37,99,235,0.28)'
              }}
            >
              RH
            </div>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#475569', fontWeight: 700 }}>Reality House</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#0f172a' }}>Royal Battle Arena</div>
            </div>
          </div>

          <nav style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  padding: '10px 14px',
                  borderRadius: 999,
                  background: pathname === item.href ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)',
                  border: '1px solid rgba(255,255,255,0.42)',
                  color: '#111827',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="/login" style={{ textDecoration: 'none', color: '#0f172a', fontWeight: 700 }}>Login</Link>
            <Link href="/signup" style={{ textDecoration: 'none', color: '#fff', fontWeight: 700, padding: '11px 18px', borderRadius: 999, background: 'linear-gradient(135deg, #b91c1c, #1d4ed8)' }}>Sign Up</Link>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 24px 64px' }}>{children}</div>

      <footer style={{ borderTop: '1px solid rgba(148,163,184,0.25)', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '28px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 24, color: '#0f172a' }}>Royal Battle Arena</div>
            <p style={{ margin: '12px 0 0', color: '#475569', fontWeight: 500 }}>Built for bold competition, social tension, and memorable house moments.</p>
          </div>
          <div>
            <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: 10 }}>Explore</div>
            <div style={{ display: 'grid', gap: 8, color: '#475569' }}>
              <Link href="/about" style={{ color: '#475569', textDecoration: 'none' }}>About</Link>
              <Link href="/tutorial" style={{ color: '#475569', textDecoration: 'none' }}>Tutorial</Link>
              <Link href="/blog" style={{ color: '#475569', textDecoration: 'none' }}>Blog</Link>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: 10 }}>Resources</div>
            <div style={{ display: 'grid', gap: 8, color: '#475569' }}>
              <Link href="/terms" style={{ color: '#475569', textDecoration: 'none' }}>Terms</Link>
              <Link href="/privacy" style={{ color: '#475569', textDecoration: 'none' }}>Privacy</Link>
              <DownloadLink label="Download Game" style={{ color: '#475569', textDecoration: 'none' }} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
