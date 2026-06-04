import Reveal from '@/components/ui/Reveal'
import { company } from '@/data/company'

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        minHeight:      '100vh',
        background:     'var(--navy-dark)',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        padding:        '120px 6% 80px',
        position:       'relative',
        overflow:       'hidden',
      }}
    >
      {/* Decorative radial blobs — identical to original ::before / ::after */}
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        width: '600px', height: '600px',
        right: '-120px', top: '-120px',
        background: 'radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        width: '400px', height: '400px',
        left: '-80px', bottom: '-80px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
      }} />

      {/* FIX: Mengunci layout menggunakan Utility Class Tailwind murni agar tidak hancur oleh styled-jsx */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-[1200px] mx-auto w-full z-10">
        {/* LEFT */}
        <div>
          <Reveal delay={0}>
            <h2 style={{
              fontFamily:    'var(--font-montserrat), Montserrat, sans-serif',
              fontWeight:    700,
              fontSize:      'clamp(1rem, 2vw, 1.2rem)',
              color:         'rgba(255,255,255,0.6)',
              letterSpacing: '0.1em',
              marginBottom:  '8px',
            }}>
              OUR
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 style={{
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontWeight: 900,
              fontStyle:  'italic',
              fontSize:   'clamp(2.6rem, 5.5vw, 4.4rem)',
              lineHeight: 1.0,
              color:      'var(--gold)',
              marginBottom: '24px',
            }}>
              COMPANY<br />PROFILE
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p style={{
              fontSize:     'clamp(0.88rem, 1.5vw, 1rem)',
              color:        'rgba(255,255,255,0.78)',
              lineHeight:   1.85,
              marginBottom: '36px',
              maxWidth:     '520px',
            }}>
              {company.description}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <a href="#business" className="btn btn-gold">
              <em>BUSINESS SCOPE</em>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                stroke="currentColor" strokeWidth="2.5">
                <path d="M5 2l5 5-5 5" />
              </svg>
            </a>
          </Reveal>

          <Reveal delay={0.4}>
            <div style={{
              display:    'flex',
              alignItems: 'flex-start',
              gap:        '8px',
              color:      'rgba(255,255,255,0.55)',
              fontSize:   '0.82rem',
              marginTop:  '28px',
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24"
                fill="rgba(255,255,255,0.55)" style={{ flexShrink: 0, marginTop: '2px' }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {company.address}
            </div>
          </Reveal>
        </div>

        {/* RIGHT — hero image */}
        {/* FIX: Ditambahkan hidden md:block langsung di Tailwind agar sinkron saat responsive mobile */}
        <Reveal delay={0.2} className="hidden md:block w-full">
          <div style={{
            width:        '100%',
            aspectRatio:  '4/3',
            borderRadius: 'var(--radius-lg)',
            border:       '2px solid rgba(255,255,255,0.1)',
            overflow:     'hidden',
            position:     'relative',
          }}>
            <div className="ph" style={{ width: '100%', height: '100%' }}>
              <span className="ph-label">FOTO UTAMA<br />PROYEK / KANTOR</span>
            </div>

            {/* Experience badge */}
            <div style={{
              position:     'absolute',
              bottom:       '20px', // FIX: Diubah ke nilai positif agar tidak amblas keluar layar terpotong overflow
              left:         '20px',   // FIX: Diubah ke nilai positif agar masuk rapi di dalam frame foto
              background:   'var(--gold)',
              color:        'var(--navy-dark)',
              fontFamily:   'var(--font-montserrat), Montserrat, sans-serif',
              fontWeight:   800,
              fontSize:     '0.78rem',
              padding:      '12px 18px',
              borderRadius: '10px',
              lineHeight:   1.3,
              boxShadow:    '0 8px 24px rgba(245,166,35,0.4)',
            }}>
              <strong style={{ fontSize: '1.6rem', display: 'block', lineHeight: 1 }}>
                {company.experience}
              </strong>
              Tahun Pengalaman
            </div>
          </div>
        </Reveal>
      </div>

      {/* Tetap mempertahankan sisa style bawaan lainnya jika dibutuhkan */}
      <style jsx global>{`
        @media (max-width: 680px) {
          #home { padding: 100px 4% 60px; }
        }
      `}</style>
    </section>
  )
}