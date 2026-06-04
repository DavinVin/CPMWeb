import Reveal from '@/components/ui/Reveal'

const whyPoints = [
  {
    id:      'experience',
    title:   'Berpengalaman Lebih dari 10 Tahun',
    desc:    'Kami telah hadir dan dipercaya di industri ini selama lebih dari satu dekade, menjadi bukti komitmen dan konsistensi kami dalam memberikan layanan terbaik.',
    iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  },
  {
    id:      'portfolio',
    title:   'Portofolio dari Perusahaan Besar',
    desc:    'PT Catur Putra Manggala telah dipercaya menangani berbagai proyek penting dari perusahaan-perusahaan besar, mencerminkan kredibilitas dan keunggulan layanan kami.',
    iconPath: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z',
  },
  {
    id:      'team',
    title:   'Didukung oleh 4 Tim Pemasangan Profesional',
    desc:    'Kami memiliki empat tim khusus yang berpengalaman dan terlatih dalam pemasangan pagar panel beton dan pondasi.',
    iconPath: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
  },
  {
    id:      'quality',
    title:   'Kualitas Produk Unggul dan Terbukti',
    desc:    'Produk pagar panel beton kami dibuat dengan standar tinggi, kuat, tahan lama, dan memiliki hasil akhir yang rapi.',
    iconPath: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
  },
]

export default function WhyChooseUsSection() {
  return (
    <section
      id="why"
      style={{ padding: '96px 6%', background: 'var(--white)' }}
    >
      {/* Heading */}
      <Reveal style={{ marginBottom: '52px' }}>
        <span className="section-tag">Why Choose Us?</span>
        <h2
          className="section-heading"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
        >
          Trusted <u style={{ textDecorationColor: 'var(--gold)' }}>Experience</u>,<br />
          Proven <u style={{ textDecorationColor: 'var(--gold)' }}>Quality</u>
        </h2>
      </Reveal>

      <div className="why-layout">
        {/* CPM logo mark */}
        <Reveal className="why-logo-col">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width:        '260px', height: '260px',
              borderRadius: '50%',
              background:   'var(--navy)',
              display:      'flex',
              alignItems:   'center',
              justifyContent: 'center',
              boxShadow:    '0 20px 60px rgba(23,23,107,0.3)',
            }}>
              <div style={{
                display:             'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows:    '1fr 1fr',
                width:               '190px', height: '190px',
                gap:                 '4px',
              }}>
                {/* C */}
                <div style={{
                  background:     'var(--navy-dark)', borderRadius: '50%',
                  display:        'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily:     'var(--font-montserrat), Montserrat, sans-serif',
                  fontWeight:     900, color: 'var(--white)', fontSize: '1.9rem',
                }}>C</div>
                {/* P */}
                <div style={{
                  background:     'var(--navy-dark)', borderRadius: '50%',
                  display:        'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily:     'var(--font-montserrat), Montserrat, sans-serif',
                  fontWeight:     900, color: 'var(--white)', fontSize: '1.9rem',
                }}>P</div>
                {/* M — spans full width */}
                <div style={{
                  gridColumn:     '1 / 3',
                  background:     'var(--navy-dark)', borderRadius: '40px',
                  display:        'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily:     'var(--font-montserrat), Montserrat, sans-serif',
                  fontWeight:     900, color: 'var(--white)', fontSize: '2rem',
                }}>M</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Points list */}
        <Reveal delay={0.2}>
          <div style={{
            display:       'flex',
            flexDirection: 'column',
            background:    'var(--navy)',
            borderRadius:  'var(--radius-lg)',
            overflow:      'hidden',
            boxShadow:     '0 20px 60px rgba(23,23,107,0.2)',
          }}>
            {whyPoints.map((point, i) => (
              <div
                key={point.id}
                className="why-point"
                style={{
                  display:     'flex',
                  gap:         '18px',
                  alignItems:  'flex-start',
                  padding:     '24px 28px',
                  borderBottom: i < whyPoints.length - 1
                    ? '1px solid rgba(255,255,255,0.07)'
                    : 'none',
                }}
              >
                {/* Icon */}
                <div style={{
                  width:          '50px', height: '50px',
                  flexShrink:     0,
                  borderRadius:   '12px',
                  background:     'rgba(245,166,35,0.15)',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                }}>
                  <svg viewBox="0 0 24 24"
                    style={{ width: '24px', height: '24px', fill: 'var(--gold)' }}>
                    <path d={point.iconPath} />
                  </svg>
                </div>

                {/* Text */}
                <div>
                  <h4 style={{
                    fontFamily:   'var(--font-montserrat), Montserrat, sans-serif',
                    fontWeight:   700, fontSize: '0.97rem',
                    color:        'var(--white)', marginBottom: '5px',
                  }}>
                    {point.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.7 }}>
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style jsx global>{`
        .why-layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 52px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .why-point { transition: background 0.2s; }
        .why-point:hover { background: rgba(255,255,255,0.04); }

        @media (max-width: 900px) {
          .why-layout { grid-template-columns: 1fr; }
          .why-logo-col { display: none; }
        }
        @media (max-width: 680px) {
          #why { padding: 64px 4%; }
        }
      `}</style>
    </section>
  )
}
