import Reveal from '@/components/ui/Reveal'

export default function ThankYouBanner() {
  return (
    <div style={{
      background:     'var(--navy)',
      position:       'relative',
      overflow:       'hidden',
      padding:        '72px 6%',
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      justifyContent: 'center',
      gap:            '6px',
    }}>
      {/* Background placeholder (becomes real photo later) */}
      <div className="ph" style={{
        position: 'absolute', inset: 0, opacity: 0.15,
      }} />

      {/* Decorative worker silhouettes */}
      <div style={{
        position:     'absolute', bottom: 0, left: '4%',
        width:        '160px', height: '160px',
        background:   'rgba(255,255,255,0.04)',
        borderRadius: '12px 12px 0 0',
      }} />
      <div style={{
        position:     'absolute', bottom: 0, right: '4%',
        width:        '160px', height: '160px',
        background:   'rgba(255,255,255,0.04)',
        borderRadius: '12px 12px 0 0',
      }} />

      <Reveal style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontFamily:        'var(--font-montserrat), Montserrat, sans-serif',
          fontWeight:        900,
          fontStyle:         'italic',
          fontSize:          'clamp(3rem, 9vw, 6rem)',
          color:             'var(--white)',
          letterSpacing:     '0.05em',
          WebkitTextStroke:  '2px rgba(23,23,107,0.6)',
          textAlign:         'center',
        }}>
          THANK YOU
        </h2>
      </Reveal>

      <Reveal delay={0.1} style={{ position: 'relative', zIndex: 1 }}>
        <p style={{
          fontStyle:     'italic',
          fontSize:      'clamp(0.95rem, 2vw, 1.2rem)',
          color:         'rgba(255,255,255,0.8)',
          letterSpacing: '0.06em',
          textAlign:     'center',
        }}>
          Let&apos;s Connect Each Other
        </p>
      </Reveal>
    </div>
  )
}
