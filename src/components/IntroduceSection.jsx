import React from 'react';

export default function IntroduceSection() {
  const frontendSkills = ["React", "Next.js (App Router)", "React Native / Expo", "HTML5 · CSS3", "JavaScript ES6+"];
  const backendSkills = ["Cloudflare Workers", "Hono", "D1 · Drizzle ORM", "Firebase Auth", "Node.js · Express", "Turborepo"];
  const devTools = ["Git · GitHub", "Web Push · PWA", "REST API 설계", "Mock API · JSON Schema", "Figma"];

  return (
    <section 
      id="about" 
      className="snap-section"
      style={{
        background: '#2D2D2D',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px'
      }}
    >
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '48px',
        alignItems: 'center'
      }} className="project-grid-responsive">
        
        {/* Left column: Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.72rem',
            color: 'var(--accent)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase'
          }}>
            // INTRODUCE
          </div>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: '800',
            lineHeight: '1.3',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            페인 포인트를<br />
            코드로 해결합니다
          </h2>
          <p style={{
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.8'
          }}>
            뷰티 업계에서 팀을 이끌며 <strong style={{ color: 'var(--text-primary)', fontWeight: '600' }}>현장의 비효율을 발견하고 개선안을 직접 만드는 것</strong>이 제 일상이었습니다. 개발자로 전향한 지금도 그 습관은 그대로입니다. 주변의 실제 문제를 먼저 정의하고, 아키텍처를 설계한 뒤 직접 구현합니다.
          </p>
          <p style={{
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.8'
          }}>
            학습 기록 관리 서비스인 <strong style={{ color: 'var(--text-primary)', fontWeight: '600' }}>듀오잉수</strong>가 그 대표적인 결과물입니다. 기획 PRD v4 설계, Cloudflare 무비용 서버리스 스택 및 Web Push 알림 서버 등을 풀스택으로 주도하여 빌드했습니다.
          </p>
        </div>

        {/* Right column: Tech Stack Card Grid */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          
          {/* Frontend Card */}
          <div className="border-offset-box" style={{ padding: '18px 22px', background: 'rgba(0,0,0,0.1)' }}>
            <div className="mono-font" style={{
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              Frontend
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {frontendSkills.map((skill, idx) => (
                <span key={idx} className="mono-font" style={{
                  fontSize: '0.68rem',
                  padding: '4px 10px',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  background: skill.includes('React') || skill.includes('Next') ? 'var(--accent-glow)' : 'rgba(255,255,255,0.02)',
                  color: skill.includes('React') || skill.includes('Next') ? 'var(--accent)' : 'var(--text-secondary)',
                  borderColor: skill.includes('React') || skill.includes('Next') ? 'var(--accent)' : 'var(--border)'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Card */}
          <div className="border-offset-box" style={{ padding: '18px 22px', background: 'rgba(0,0,0,0.1)' }}>
            <div className="mono-font" style={{
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              Backend & Infra
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {backendSkills.map((skill, idx) => (
                <span key={idx} className="mono-font" style={{
                  fontSize: '0.68rem',
                  padding: '4px 10px',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  background: skill.includes('Workers') || skill.includes('Hono') ? 'var(--accent-glow)' : 'rgba(255,255,255,0.02)',
                  color: skill.includes('Workers') || skill.includes('Hono') ? 'var(--accent)' : 'var(--text-secondary)',
                  borderColor: skill.includes('Workers') || skill.includes('Hono') ? 'var(--accent)' : 'var(--border)'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Dev Card */}
          <div className="border-offset-box" style={{ padding: '18px 22px', background: 'rgba(0,0,0,0.1)' }}>
            <div className="mono-font" style={{
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              Dev & Collaboration
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {devTools.map((skill, idx) => (
                <span key={idx} className="mono-font" style={{
                  fontSize: '0.68rem',
                  padding: '4px 10px',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  background: 'rgba(255,255,255,0.02)',
                  color: 'var(--text-secondary)'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
