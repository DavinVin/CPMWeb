'use client'

import { useState, useEffect, useCallback } from 'react'
import { company } from '@/data/company'

const navLinks = [
  { label: 'Home',      href: '#home'      },
  { label: 'Business',  href: '#business'  },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  // Navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on outside click
  const handleBodyClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.closest('#navbar') && !target.closest('#mob-menu')) {
      setMenuOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleBodyClick)
    return () => document.removeEventListener('click', handleBodyClick)
  }, [handleBodyClick])

  const closeMob = () => setMenuOpen(false)

  return (
    <>
      <nav
        id="navbar"
        style={{
          position:   'fixed',
          top: 0, left: 0, right: 0,
          zIndex:     1000,
          height:     '70px',
          background: scrolled ? 'rgba(14,14,74,0.97)' : 'var(--navy-dark)',
          display:    'flex',
          alignItems: 'center',
          
          // KUNCI UTAMA MELAR TOTAL:
          // Memaksa Logo CPM ke ujung kiri layar dan tautan Menu ke ujung kanan layar monitor
          justifyContent: 'space-between', 
          
          // Menggunakan padding persen kecil agar konten aman berjarak manis di monitor raksasa
          padding:    '0 4%', 
          
          boxShadow:  '0 2px 20px rgba(0,0,0,0.35)',
          transition: 'background 0.3s',
          width:      '100%',
          boxSizing:  'border-box'
        }}
      >
        {/* Brand */}
        <a
          href="#home"
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          {/* Logo badge — CPM grid */}
          <div style={{
            width: '50px', height: '50px',
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.6)',
            background: 'var(--navy-mid)',
            display: 'grid',
            gridTemplateAreas: '"c p" "m m"',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            placeItems: 'center',
            padding: '6px',
            flexShrink: 0,
          }}>
            {['C','P','M'].map((letter, i) => (
              <span key={letter} style={{
                fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                fontWeight: 900,
                fontSize: '0.82rem',
                color: 'var(--white)',
                lineHeight: 1,
                gridArea: ['c','p','m'][i],
              }}>{letter}</span>
            ))}
          </div>

          {/* Brand text */}
          <div>
            <p style={{
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontWeight: 800,
              fontSize: '0.82rem',
              color: 'var(--white)',
              letterSpacing: '0.05em',
              lineHeight: 1.3,
            }}>
              PT CATUR PUTRA MANGGALA
            </p>
            <p style={{
              fontSize: '0.52rem',
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.1em',
              fontWeight: 600,
            }}>
              {company.tagline}
            </p>
          </div>
        </a>

        {/* Desktop nav links */}
        <ul style={{ display: 'flex', gap: '38px', listStyle: 'none' }}
          className="hide-mobile">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  color: 'rgba(255,255,255,0.85)',
                  letterSpacing: '0.02em',
                  position: 'relative',
                }}
                className="nav-link"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          id="hbg"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Menu"
          className="hamburger show-mobile"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '5px',
          }}
        >
          <span style={{
            display: 'block', width: '24px', height: '2px',
            background: 'var(--white)', borderRadius: '2px',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '24px', height: '2px',
            background: 'var(--white)', borderRadius: '2px',
            opacity: menuOpen ? 0 : 1,
            transition: 'opacity 0.3s',
          }} />
          <span style={{
            display: 'block', width: '24px', height: '2px',
            background: 'var(--white)', borderRadius: '2px',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mob-menu"
          style={{
            position: 'fixed',
            top: '70px', left: 0, right: 0,
            background: 'var(--navy-dark)',
            zIndex: 999,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '12px 0 20px',
            animation: 'slideDown 0.25s ease',
          }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMob}
              style={{
                display: 'block',
                padding: '13px 6%',
                fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.85)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      {/* Scoped styles for navbar interactions + responsive */}
      <style jsx global>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0; right: 0;
          height: 2px;
          background: var(--gold);
          transform: scaleX(0);
          transition: transform 0.2s;
          border-radius: 2px;
        }
        .nav-link:hover { color: var(--gold) !important; }
        .nav-link:hover::after { transform: scaleX(1); }

        @media (max-width: 900px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          #navbar { padding: 0 1.5rem !important; }
        }
        @media (max-width: 680px) {
          #navbar { padding: 0 1rem !important; }
        }
      `}</style>
    </>
  )
}