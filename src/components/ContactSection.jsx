import React from 'react';

export default function ContactSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section 
      id="contact" 
      className="snap-section"
      style={{
        background: 'var(--bg-base)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '600px',
        zIndex: 2
      }}>
        {/* Eyebrow */}
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.72rem',
          color: 'var(--accent)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '16px'
        }}>
          // CONNECT
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
          fontWeight: '800',
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
          marginBottom: '16px'
        }}>
          함께 성장할 팀을 찾고 있습니다
        </h2>

        {/* Description */}
        <p style={{
          fontSize: '0.92rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.7',
          marginBottom: '40px'
        }}>
          비즈니스에 가치를 더하고, 지속 가능한 백엔드 시스템 설계와 협업 문화에 관심이 많습니다.<br />
          언제든 편하게 연락해 주세요.
        </p>

        {/* Contact Links Grid */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '14px',
          flexWrap: 'wrap',
          width: '100%',
          marginBottom: '48px'
        }}>
          <a 
            href="mailto:dup04@naver.com" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'var(--accent)',
              border: '1px solid var(--accent)',
              borderRadius: '4px',
              color: '#FAF7F2',
              fontFamily: 'var(--mono)',
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '0.04em',
              transition: 'opacity var(--transition)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Email: dup04@naver.com
          </a>
          
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.04em',
              transition: 'all var(--transition)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            GitHub
          </a>

          <a 
            href="https://velog.io" 
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.04em',
              transition: 'all var(--transition)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            Blog
          </a>
        </div>
      </div>

      {/* Footer copyright */}
      <footer style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: '1px solid var(--border)',
        padding: '24px 0',
        textAlign: 'center',
        background: 'var(--bg-surface)'
      }}>
        <div className="container">
          <p style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.04em'
          }}>
            © {currentYear} jisu.dev. Built with <span style={{ color: 'var(--accent)' }}>React</span> & <span style={{ color: 'var(--accent)' }}>Vite</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
