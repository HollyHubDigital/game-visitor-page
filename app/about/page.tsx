import { VisitorShell } from '../components/VisitorShell';

export default function AboutPage() {
  return (
    <VisitorShell>
      <section style={{ maxWidth: 980, margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: 20, color: '#0f172a', textShadow: '0 1px 0 #ffffff, 0 8px 18px rgba(15,23,42,0.12)' }}>About the game</h1>
        <p style={{ fontSize: 20, lineHeight: 1.7, fontWeight: 500, color: '#1f2937', marginBottom: 18 }}>
          Royal Battle Arena is an original reality competition experience built around social strategy, group challenges, and survival under pressure.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.7, fontWeight: 500, color: '#334155', marginBottom: 18 }}>
          Players join a living house, make alliances, face tasks, manage rivalries, and survive public votes. The house is shaped by the personalities of every contestant, and each season creates a new story.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, marginTop: 30 }}>
          {[
            { title: 'Social strategy', text: 'Build bonds, apply pressure, and move without exposing your plan too early.' },
            { title: 'Challenge loop', text: 'Win tasks, earn progress, and claim influence in the house.' },
            { title: 'Event engine', text: 'Scheduled competitions, leaderboards, and public outcomes handled by the backend.' }
          ].map((card) => (
            <div key={card.title} style={{ background: 'rgba(255,255,255,0.52)', border: '1px solid rgba(255,255,255,0.42)', borderRadius: 22, padding: 22, boxShadow: '0 18px 38px rgba(15,23,42,0.08)' }}>
              <h3 style={{ margin: '0 0 12px', fontSize: 26, color: '#0f172a', textShadow: '0 1px 0 #fff, 0 8px 18px rgba(15,23,42,0.08)' }}>{card.title}</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: '#475569', fontWeight: 500 }}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </VisitorShell>
  );
}
