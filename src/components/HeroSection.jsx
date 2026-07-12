import React from 'react';

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="snap-section"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '64px',
        background: 'radial-gradient(circle at 80% 20%, rgba(216, 88, 120, 0.06) 0%, transparent 60%), var(--bg-base)',
        position: 'relative'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          maxWidth: '800px'
        }}>
          {/* Eyebrow */}
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.75rem',
            color: 'var(--accent)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--accent)' }} />
            Junior Fullstack / Backend Developer
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: '800',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: '24px',
            fontFamily: 'var(--sans)'
          }}>
            비즈니스 의도를<br />
            <span style={{ 
              color: 'transparent',
              WebkitTextStroke: '1px var(--text-primary)',
              fontFamily: 'var(--mono)'
            }}>견고한 아키텍처</span>로<br />
            증명하는 개발자
          </h1>

          {/* Body */}
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            marginBottom: '40px',
            maxWidth: '620px'
          }}>
            뷰티 도메인의 팀 리더로 <strong style={{ color: 'var(--text-primary)', fontWeight: '600' }}>현장 페인 포인트를 집요하게 분석하는 습관</strong>이 몸에 밴 개발자입니다.<br />
            기획 의도를 명확한 데이터 흐름으로 번역하고, API 설계부터 서버리스 인프라까지 직접 구축하며 제품을 안정적으로 완성합니다.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '64px'
          }}>
            <button 
              onClick={scrollToProjects}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                background: 'var(--accent)',
                color: '#FAF7F2',
                fontFamily: 'var(--mono)',
                fontSize: '0.8rem',
                fontWeight: '700',
                borderRadius: '4px',
                letterSpacing: '0.04em',
                transition: 'opacity var(--transition), transform var(--transition)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              projects 보기 →
            </button>
            <button 
              onClick={scrollToContact}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--mono)',
                fontSize: '0.8rem',
                borderRadius: '4px',
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
              contact
            </button>
          </div>

          {/* Stats Bar */}
          <div style={{
            display: 'flex',
            gap: '36px',
            flexWrap: 'wrap',
            padding: '20px 0',
            borderTop: '1px solid var(--border)',
            width: '100%'
          }}>
            {[
              { num: '5', label: 'Projects Built' },
              { num: '3', label: 'Team Projects' },
              { num: '1', label: 'Live Service' },
              { num: '0원', label: 'Infra Cost (CF free tier)' }
            ].map((stat, idx) => (
              <React.Fragment key={stat.label}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    lineHeight: '1.1'
                  }}>{stat.num}</span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.04em'
                  }}>{stat.label}</span>
                </div>
                {idx < 3 && (
                  <div style={{
                    width: '1px',
                    background: 'var(--border)',
                    alignSelf: 'stretch'
                  }} className="stat-divider" />
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
