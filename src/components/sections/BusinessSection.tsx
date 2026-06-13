import Reveal from '@/components/ui/Reveal'
import { services } from '@/data/services'

export default function BusinessSection() {
  return (
    <section
      id="business"
      style={{ padding: '96px 6%', background: 'var(--off-white)' }}
    >
      {/* Header */}
      <Reveal style={{ textAlign: 'center', marginBottom: '56px' }}>
        <span className="section-tag">What We Do</span>
        <h2
          className="section-heading"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)' }}
        >
          OUR<br />BUSINESS SCOPE
        </h2>
      </Reveal>

      {/* Services grid */}
      <div className="services-grid">
        {services.map((svc, i) => (
          <Reveal key={svc.id} delay={(i + 1) * 0.08}>
            <div className="svc-card">
              {/* Photo + icon ring */}
              <div style={{ position: 'relative', flexShrink: 0 }}>
                {svc.imageUrl ? (
                  <img 
                    src={svc.imageUrl} 
                    alt={svc.title} 
                    className="svc-img" 
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className="ph svc-img">
                    <span className="ph-label" style={{ whiteSpace: 'pre-line' }}>
                      {svc.photoLabel}
                    </span>
                  </div>
                )}
                {/* Floating icon ring */}
                <div style={{
                  position:        'absolute',
                  bottom:          '-22px',
                  left:            '50%',
                  transform:       'translateX(-50%)',
                  width:           '48px',
                  height:          '48px',
                  borderRadius:    '50%',
                  background:      'var(--navy-dark)',
                  border:          '3px solid var(--navy)',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  zIndex:          2,
                }}>
                  <svg viewBox="0 0 24 24" style={{ width: '22px', height: '22px', fill: 'var(--white)' }}>
                    <path d={svc.iconPath} />
                  </svg>
                </div>
              </div>

              {/* Body */}
              <div style={{
                padding:       '34px 16px 20px',
                flex:          1,
                display:       'flex',
                flexDirection: 'column',
              }}>
                <h3 style={{
                  fontFamily:   'var(--font-montserrat), Montserrat, sans-serif',
                  fontWeight:   700,
                  fontSize:     '0.88rem',
                  color:        'var(--gold)',
                  marginBottom: '8px',
                  lineHeight:   1.35,
                }}>
                  {svc.title}
                </h3>
                <p style={{
                  fontSize:   '0.78rem',
                  color:      'rgba(255,255,255,0.75)',
                  lineHeight: 1.7,
                  flex:       1,
                }}>
                  {svc.description}
                </p>
                <a
                  href="#contact"
                  className="svc-learn"
                >
                  Learn More ›
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <style jsx global>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .svc-card {
          background: var(--navy);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.28s cubic-bezier(.34,1.56,.64,1), box-shadow 0.28s;
          cursor: default;
          height: 100%;
        }
        .svc-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 50px rgba(23,23,107,0.3);
        }
        .svc-img {
          width: 100%;
          height: 150px;
        }
        .svc-learn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--gold);
          font-family: var(--font-montserrat), Montserrat, sans-serif;
          font-weight: 700;
          font-size: 0.78rem;
          margin-top: 14px;
          transition: gap 0.2s;
          text-decoration: none;
        }
        .svc-learn:hover { gap: 8px; }

        @media (max-width: 1100px) {
          .services-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 680px) {
          .services-grid { grid-template-columns: 1fr 1fr; }
          #business { padding: 64px 4%; }
        }
        @media (max-width: 420px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
