import Link from 'next/link';
import { VisitorShell } from '../components/VisitorShell';

export default function VisitorSignupPage() {
  return (
    <VisitorShell>
      <section style={{ maxWidth: 560, margin: '0 auto' }}>
        <div style={{ background: 'rgba(255,255,255,0.58)', border: '1px solid rgba(255,255,255,0.42)', borderRadius: 26, padding: 30, boxShadow: '0 20px 40px rgba(15,23,42,0.09)' }}>
          <h1 style={{ margin: '0 0 12px', fontSize: 'clamp(2.5rem, 5vw, 3.6rem)', color: '#0f172a', textShadow: '0 1px 0 #fff, 0 8px 18px rgba(15,23,42,0.12)' }}>Create account</h1>
          <p style={{ margin: '0 0 18px', color: '#475569', fontSize: 17, lineHeight: 1.7, fontWeight: 500 }}>Create an account to follow the project, access downloads, and save your supporter profile.</p>
          <p role="status" style={{ margin: 0, color: '#7f1d1d', fontWeight: 600 }}>Account creation is not available yet. No credentials will be requested or stored.</p>
          <p style={{ marginTop: 18, color: '#475569', fontWeight: 500 }}>
            Already have an account? <Link href="/login" style={{ color: '#1d4ed8', fontWeight: 700 }}>Log in</Link>
          </p>
        </div>
      </section>
    </VisitorShell>
  );
}
