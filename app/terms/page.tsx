import { VisitorShell } from '../components/VisitorShell';

export default function TermsPage() {
  return (
    <VisitorShell>
      <section style={{ maxWidth: 980, margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.6rem)', marginBottom: 20, color: '#0f172a', textShadow: '0 1px 0 #ffffff, 0 8px 18px rgba(15,23,42,0.12)' }}>Terms and conditions</h1>
        <div style={{ display: 'grid', gap: 18 }}>
          <div style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.42)', borderRadius: 22, padding: 22 }}>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: '#334155', fontWeight: 500 }}>By using Royal Battle Arena, you agree to fair game play, lawful conduct, and respect for all players, admins, and staff.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.42)', borderRadius: 22, padding: 22 }}>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: '#334155', fontWeight: 500 }}>You must not exploit bugs, bypass validations, manipulate vote results, or create content that violates platform rules or local law.</p>
          </div>
        </div>
      </section>
    </VisitorShell>
  );
}
