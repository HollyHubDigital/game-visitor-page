import { VisitorShell } from '../components/VisitorShell';

export default function PrivacyPage() {
  return (
    <VisitorShell>
      <section style={{ maxWidth: 980, margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.6rem)', marginBottom: 20, color: '#0f172a', textShadow: '0 1px 0 #ffffff, 0 8px 18px rgba(15,23,42,0.12)' }}>Privacy policy</h1>
        <div style={{ display: 'grid', gap: 18 }}>
          <div style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.42)', borderRadius: 22, padding: 22 }}>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: '#334155', fontWeight: 500 }}>We protect account data, event data, and player progress using secure server workflows, access controls, and limited data collection.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.42)', borderRadius: 22, padding: 22 }}>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: '#334155', fontWeight: 500 }}>We do not sell personal data, and we keep sensitive credentials separated from public or client-side code paths.</p>
          </div>
        </div>
      </section>
    </VisitorShell>
  );
}
