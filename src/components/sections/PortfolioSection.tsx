import Reveal from '@/components/ui/Reveal'
import { portfolioGroups, portfolioSidebar } from '@/data/portfolio'

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      style={{
        padding:  '96px 6%',
        background: 'var(--navy)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blob */}
      <div style={{
        position:      'absolute',
        width:         '500px', height: '500px',
        borderRadius:  '50%',
        right:         '-150px', top: '-150px',
        background:    'radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="portfolio-layout">
        {/* Sidebar */}
        <Reveal>
          <div>
            <span className="section-tag">{portfolioSidebar.tag}</span>
            <h2 style={{
              fontFamily:   'var(--font-montserrat), Montserrat, sans-serif',
              fontWeight:   900,
              fontStyle:    'italic',
              fontSize:     'clamp(2.2rem, 3.5vw, 3rem)',
              color:        'var(--white)',
              lineHeight:   1.05,
              marginBottom: '20px',
              whiteSpace:   'pre-line',
            }}>
              {portfolioSidebar.heading}
            </h2>
            <p style={{
              fontSize:     '0.88rem',
              color:        'rgba(255,255,255,0.75)',
              lineHeight:   1.85,
              marginBottom: '28px',
            }}>
              {portfolioSidebar.description}
            </p>
            <a href="#contact" className="btn btn-gold">
              {portfolioSidebar.ctaLabel}
            </a>
          </div>
        </Reveal>

        {/* Portfolio groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {portfolioGroups.map((group, i) => (
            <Reveal key={group.id} delay={(i + 1) * 0.1}>
              {/* Group title pill */}
              <div style={{
                display:       'inline-flex',
                alignItems:    'center',
                gap:           '6px',
                background:    'rgba(255,255,255,0.1)',
                border:        '1px solid rgba(255,255,255,0.18)',
                color:         'var(--white)',
                fontFamily:    'var(--font-montserrat), Montserrat, sans-serif',
                fontWeight:    600,
                fontSize:      '0.8rem',
                padding:       '6px 14px',
                borderRadius:  '20px',
                marginBottom:  '12px',
                letterSpacing: '0.02em',
              }}>
                {group.title}{' '}
                <strong style={{ color: 'var(--gold)' }}>{group.bold}</strong>
              </div>

              {/* Photo grid */}
              <div style={{
                display:             'grid',
                gridTemplateColumns: '1fr 1fr',
                gap:                 '10px',
              }}>
                {group.photos.map((photo, j) => (
                  <div
                    key={j}
                    style={{
                    aspectRatio:  '16/9',
                        borderRadius: '10px',
                        overflow:     'hidden',
                        position:     'relative', // KUNCI UTAMA: agar tameng di dalam bisa melayang pas
                        border:       'none',
                        boxShadow:    '0 4px 15px rgba(0, 0, 0, 0.25)', 
                        transition:   'transform 0.25s ease',
                    }}
                    className="port-photo"
                  >
                      {photo.src ? (
                      <img 
                        src={photo.src} 
                        alt={photo.alt || photo.label} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="ph" style={{ width: '100%', height: '100%' }}>
                        <span className="ph-label" style={{ whiteSpace: 'pre-line' }}>
                          {photo.label}
                        </span>
                      </div>
                    )}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      border: '5px solid var(--navy)', // Border Navy fisik menimpa di atas
                      borderRadius: '10px',
                      pointerEvents: 'none',
                      zIndex: 1, // Memaksa dia berdiri di lapisan paling depan
                      }} />
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .portfolio-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 52px;
          align-items: start;
          max-width: 1440px;
          margin: 0 auto;
        }
        .port-photo:hover { 
          transform: scale(1.03); 
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4); 
}

        @media (max-width: 900px) {
          .portfolio-layout { grid-template-columns: 1fr; }
        }
        @media (max-width: 680px) {
          #portfolio { padding: 64px 4%; }
        }
      `}</style>
    </section>
  )
}
