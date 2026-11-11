import { VisitorShell } from '../components/VisitorShell';

const posts = [
  { title: 'Designing the first season loop', text: 'The first social engine should create tension, trust, and pressure without ever feeling random.' },
  { title: 'Why challenge design matters', text: 'Good challenge formats create drama, depth, and replay value without overloading the player.' },
  { title: 'Balancing online events', text: 'A fair event system needs schedule clarity, strict validation, and transparent leaderboards.' }
];

export default function BlogPage() {
  return (
    <VisitorShell>
      <section style={{ maxWidth: 980, margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: 20, color: '#0f172a', textShadow: '0 1px 0 #ffffff, 0 8px 18px rgba(15,23,42,0.12)' }}>Blog</h1>
        <div style={{ display: 'grid', gap: 18 }}>
          {posts.map((post) => (
            <article key={post.title} style={{ background: 'rgba(255,255,255,0.52)', border: '1px solid rgba(255,255,255,0.42)', borderRadius: 22, padding: 22 }}>
              <h3 style={{ margin: '0 0 10px', fontSize: 26, color: '#0f172a', textShadow: '0 1px 0 #fff, 0 8px 18px rgba(15,23,42,0.08)' }}>{post.title}</h3>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: '#475569', fontWeight: 500 }}>{post.text}</p>
            </article>
          ))}
        </div>
      </section>
    </VisitorShell>
  );
}
