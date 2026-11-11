import Link from 'next/link';
import { ModelCanvas } from './components/ModelCanvas';
import { DownloadLink } from './components/DownloadLink';
import { VisitorShell } from './components/VisitorShell';

const milestoneCards = [
  { title: 'House roster', value: '21', label: 'Character models ready for review' },
  { title: 'Challenge types', value: '12', label: 'Friendly to event designers' },
  { title: 'World build', value: '1', label: 'Large house scene in the pipeline' }
];

const featureCards = [
  'Mobile and desktop sessions',
  'Offline season simulation',
  'Auth, profile, and account flow',
  'Scheduled online events',
  'Head of House and voting logic',
  'Content updates from the admin backend'
];

export default function HomePage() {
  return (
    <VisitorShell>
      <section style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 28, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.56)', border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)' }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: 'linear-gradient(135deg, #b91c1c, #2563eb)', display: 'inline-block' }} />
            <span style={{ color: '#475569', fontWeight: 700 }}>New season launch</span>
          </div>

          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 0.92, margin: '18px 0', fontWeight: 900, letterSpacing: '-0.04em', color: '#0f172a', textShadow: '0 1px 0 #ffffff, 0 6px 18px rgba(15, 23, 42, 0.16), 0 18px 30px rgba(29,78,216,0.18)' }}>
            Royal Battle Arena
          </h1>

          <p style={{ fontSize: 22, lineHeight: 1.65, color: '#1f2937', fontWeight: 500, maxWidth: 700, marginBottom: 28 }}>
            A premium 3D reality competition experience with strategy, gossip, alliances, votes, and unforgettable house drama.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 28 }}>
            <a href="#download" style={{ textDecoration: 'none', color: '#fff', fontWeight: 700, background: 'linear-gradient(135deg, #b91c1c, #1d4ed8)', padding: '16px 22px', borderRadius: 999, boxShadow: '0 18px 26px rgba(30,64,175,0.2)' }}>Download Game</a>
            <Link href="/tutorial" style={{ textDecoration: 'none', color: '#0f172a', fontWeight: 700, background: 'rgba(255,255,255,0.52)', border: '1px solid rgba(255,255,255,0.44)', padding: '16px 22px', borderRadius: 999 }}>Explore Tutorial</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16 }}>
            {milestoneCards.map((card) => (
              <div key={card.title} style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.45)', borderRadius: 20, padding: 18, boxShadow: '0 18px 40px rgba(15, 23, 42, 0.06)' }}>
                <div style={{ fontSize: 30, fontWeight: 900, color: '#0f172a' }}>{card.value}</div>
                <div style={{ fontWeight: 700, color: '#1e293b', marginTop: 6 }}>{card.title}</div>
                <div style={{ fontSize: 13, color: '#475569', marginTop: 8 }}>{card.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.48)', border: '1px solid rgba(255,255,255,0.48)', borderRadius: 32, padding: 18, boxShadow: '0 28px 70px rgba(15,23,42,0.12)' }}>
          <ModelCanvas />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginTop: 16 }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#475569', fontWeight: 700 }}>FBX showcase</div>
              <div style={{ fontWeight: 700, color: '#0f172a', marginTop: 4 }}>male1.fbx, female1.fbx</div>
            </div>
            <button style={{ border: 'none', background: 'linear-gradient(135deg, #0f172a, #1d4ed8)', color: '#fff', fontWeight: 700, borderRadius: 999, padding: '10px 16px', cursor: 'pointer' }}>Preview</button>
          </div>
        </div>
      </section>

      <section id="download" style={{ marginTop: 40, background: 'rgba(255,255,255,0.46)', border: '1px solid rgba(255,255,255,0.42)', borderRadius: 26, padding: 24, boxShadow: '0 18px 38px rgba(15, 23, 42, 0.08)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 20, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#475569', fontWeight: 700 }}>Download access</div>
            <h2 style={{ margin: '10px 0 0', fontSize: 36, color: '#0f172a', textShadow: '0 1px 0 #fff, 0 8px 18px rgba(15,23,42,0.12)' }}>Ready to enter the house</h2>
          </div>
          <DownloadLink label="Get the game" style={{ textDecoration: 'none', background: 'linear-gradient(135deg, #b91c1c, #1d4ed8)', color: '#fff', padding: '14px 22px', borderRadius: 999, fontWeight: 800 }} />
        </div>
      </section>

      <section style={{ marginTop: 42, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
        {featureCards.map((feature) => (
          <div key={feature} style={{ background: 'rgba(255,255,255,0.48)', border: '1px solid rgba(255,255,255,0.46)', borderRadius: 20, padding: 22, boxShadow: '0 20px 45px rgba(15,23,42,0.08)' }}>
            <div style={{ width: 46, height: 46, borderRadius: 14, background: 'linear-gradient(135deg, rgba(185,28,28,0.18), rgba(37,99,235,0.18))', display: 'grid', placeItems: 'center', marginBottom: 16 }}>
              <span style={{ color: '#0f172a', fontWeight: 800 }}>✓</span>
            </div>
            <h3 style={{ margin: 0, fontSize: 22, color: '#0f172a', textShadow: '0 1px 0 #ffffff, 0 8px 18px rgba(15,23,42,0.09)' }}>{feature}</h3>
          </div>
        ))}
      </section>
    </VisitorShell>
  );
}
