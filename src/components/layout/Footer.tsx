'use client'

import { useState } from 'react'
import { company } from '@/data/company'

const navLinks = [
  { label: 'Home',      href: '#home'      },
  { label: 'Business',  href: '#business'  },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact',   href: '#contact'   },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer
      id="contact"
      style={{
        background: 'var(--navy-dark)',
        padding: '64px 6% 28px',
      }}
    >
      {/* "Contact Us" heading */}
      <div
        style={{
          fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
          fontWeight: 900,
          fontStyle: 'italic',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          color: 'var(--gold)',
          textDecoration: 'underline',
          textDecorationThickness: '3px',
          marginBottom: '44px',
        }}
      >
        Contact Us
      </div>

      {/* Grid */}
      <div className="footer-grid">
        {/* Brand column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            {/* Mini logo badge */}
            <div style={{
              width: '40px', height: '40px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.6)',
              background: 'var(--navy-mid)',
              display: 'grid',
              gridTemplateAreas: '"c p" "m m"',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '1fr 1fr',
              placeItems: 'center',
              padding: '5px',
              flexShrink: 0,
            }}>
              {['C','P','M'].map((l, i) => (
                <span key={l} style={{
                  fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                  fontWeight: 900, fontSize: '0.7rem',
                  color: 'var(--white)', lineHeight: 1,
                  gridArea: ['c','p','m'][i],
                }}>{l}</span>
              ))}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontWeight: 800, fontSize: '0.88rem', color: 'var(--white)',
            }}>
              PT CATUR PUTRA MANGGALA
            </h3>
          </div>

          <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '18px' }}>
            {company.footerDescription}
          </p>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {/* Instagram */}
            <a href={company.socialLinks.instagram} aria-label="Instagram"
              className="social-icon">
              <svg viewBox="0 0 24 24" style={{ width: '17px', height: '17px', fill: 'var(--white)' }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href={company.socialLinks.tiktok} aria-label="TikTok"
              className="social-icon">
              <svg viewBox="0 0 24 24" style={{ width: '17px', height: '17px', fill: 'var(--white)' }}>
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.84 1.56V6.79a4.85 4.85 0 01-1.07-.1z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="footer-col-title">Navigation</h4>
          <ul style={{ listStyle: 'none' }}>
            {navLinks.map(({ label, href }) => (
              <li key={href} style={{ marginBottom: '10px' }}>
                <a href={href} className="footer-link">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="footer-col-title">Contact</h4>
          <div className="contact-item">
            <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'var(--gold)', flexShrink: 0, marginTop: '2px' }}>
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>{company.phone}</span>
          </div>
          <div className="contact-item">
            <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'var(--gold)', flexShrink: 0, marginTop: '2px' }}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>{company.address}</span>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="footer-col-title">Get The Latest Information</h4>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', marginBottom: '4px' }}>
            {company.newsletterDescription}
          </p>
          <div style={{ marginTop: '14px', display: 'flex' }}>
            <input
              type="email"
              placeholder="Email Address..."
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="newsletter-input"
            />
            <button aria-label="Subscribe" className="newsletter-btn">
              <svg viewBox="0 0 24 24" style={{ width: '17px', height: '17px', fill: 'var(--navy-dark)', display: 'block' }}>
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div style={{
        paddingTop: '24px',
        textAlign: 'center',
        fontSize: '0.78rem',
        color: 'rgba(255,255,255,0.35)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        marginTop: '0',
      }}>
        © {company.copyright}
      </div>

      <style jsx global>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.2fr 1.6fr;
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .footer-col-title {
          font-family: var(--font-montserrat), Montserrat, sans-serif;
          font-weight: 700;
          font-size: 0.92rem;
          color: var(--white);
          margin-bottom: 16px;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .footer-link {
          font-size: 0.87rem;
          color: rgba(255,255,255,0.7);
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--gold); }
        .contact-item {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          font-size: 0.87rem;
          color: rgba(255,255,255,0.7);
          margin-bottom: 10px;
          line-height: 1.5;
        }
        .social-icon {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, transform 0.15s;
        }
        .social-icon:hover { background: var(--gold); transform: translateY(-2px); }
        .newsletter-input {
          flex: 1;
          padding: 10px 14px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          border-right: none;
          border-radius: 6px 0 0 6px;
          color: var(--white);
          font-size: 0.82rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .newsletter-input::placeholder { color: rgba(255,255,255,0.4); }
        .newsletter-input:focus { border-color: var(--gold); }
        .newsletter-btn {
          background: var(--gold);
          border: none;
          border-radius: 0 6px 6px 0;
          padding: 0 16px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .newsletter-btn:hover { background: var(--gold-dark); }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
        }
        @media (max-width: 680px) {
          .footer-grid { grid-template-columns: 1fr; gap: 24px; }
        }
      `}</style>
    </footer>
  )
}
