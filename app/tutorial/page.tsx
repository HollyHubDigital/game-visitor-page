import { VisitorShell } from '../components/VisitorShell';

export default function TutorialPage() {
  return (
    <VisitorShell>
      <section style={{ maxWidth: 980, margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: 20, color: '#0f172a', textShadow: '0 1px 0 #ffffff, 0 8px 18px rgba(15,23,42,0.12)' }}>Game tutorial</h1>
        <div style={{ display: 'grid', gap: 18 }}>
          {[
            { title: 'House entry', text: 'Create your profile, choose your contestant, and enter the house with a clear goal in mind.' },
            { title: 'Daily routine', text: 'Build relationships, join activities, and manage your energy through the day.' },
            { title: 'Voting and survival', text: 'Read the room, avoid suspicion, and form alliances that hold through challenge pressure.' },
            { title: 'Challenge wins', text: 'Solve tasks, complete group goals, and use your wins to push your season forward.' }
          ].map((item) => (
            <div key={item.title} style={{ background: 'rgba(255,255,255,0.52)', border: '1px solid rgba(255,255,255,0.42)', borderRadius: 22, padding: 22 }}>
              <h3 style={{ margin: '0 0 10px', fontSize: 26, color: '#0f172a', textShadow: '0 1px 0 #fff, 0 8px 18px rgba(15,23,42,0.08)' }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: '#475569', fontWeight: 500 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </VisitorShell>
  );
}
