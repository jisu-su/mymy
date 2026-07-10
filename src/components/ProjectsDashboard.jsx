import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projectsData';

export default function ProjectsDashboard() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const selectedProject = projectsData[activeProjectIdx];
  const slidesCount = 3;

  // 프로젝트가 변경되면 슬라이드를 첫 번째로 리셋
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeProjectIdx]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  const getStatusBadgeStyle = (type) => {
    switch (type) {
      case 'MAIN':
        return { background: 'rgba(229, 169, 180, 0.2)', color: 'var(--accent)', border: '1px solid var(--accent)' };
      case 'TEAM':
        return { background: 'rgba(130, 80, 255, 0.15)', color: '#BCA7FA', border: '1px solid rgba(130, 80, 255, 0.3)' };
      case 'LIVE':
        return { background: 'rgba(0, 255, 136, 0.15)', color: '#7DFFD6', border: '1px solid rgba(0, 255, 136, 0.3)' };
      case 'WIP':
        return { background: 'rgba(255, 180, 0, 0.15)', color: '#FFD366', border: '1px solid rgba(255, 180, 0, 0.3)' };
      default:
        return { background: 'rgba(0, 180, 255, 0.15)', color: '#7CD0FF', border: '1px solid rgba(0, 180, 255, 0.3)' };
    }
  };

  return (
    <section 
      id="projects" 
      className="snap-section"
      style={{
        background: 'var(--bg-base)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '64px'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '24px', textAlign: 'left' }}>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.72rem',
            color: 'var(--accent)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: '6px'
          }}>
            // PROJECTS
          </div>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '800',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            좌측 프로젝트를 선택하여 상세 아키텍처 및 트러블슈팅을 확인하세요
          </h2>
        </div>

        {/* 2-Column Dashboard Layout */}
        <div className="projects-layout">
          
          {/* LEFT: Project List Panel */}
          <div className="projects-left">
            <div className="left-header">projects_list.json</div>
            {projectsData.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => setActiveProjectIdx(idx)}
                className={`project-list-item ${activeProjectIdx === idx ? 'active' : ''}`}
                style={{ display: 'block', width: '100%' }}
              >
                <div className="list-item-top">
                  <span className="list-item-index">PROJECT_{project.id}</span>
                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.58rem',
                    padding: '2px 7px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    letterSpacing: '0.04em',
                    ...getStatusBadgeStyle(project.type)
                  }}>{project.type}</span>
                </div>
                <div className="list-item-title">{project.title}</div>
                <div className="list-item-sub">{project.sub}</div>
                <div className="list-item-badges">
                  {project.badges.map((badge, bIdx) => (
                    <span key={bIdx} className="mini-badge">{badge}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: Selected Project Detail Panel */}
          <div className="projects-right">
            
            {/* Detail Panel Header */}
            <div style={{
              padding: '24px 32px 18px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '16px',
              background: 'rgba(0,0,0,0.1)'
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '4px'
                }}>
                  <span className="mono-font" style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>
                    PROJECT_{selectedProject.id} · {selectedProject.type}
                  </span>
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '2px'
                }}>{selectedProject.title}</h3>
                <p className="mono-font" style={{
                  fontSize: '0.75rem',
                  color: 'var(--accent)'
                }}>{selectedProject.titleEn}</p>
              </div>

              {/* Top Links & Navigation Controls */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {selectedProject.links?.github && (
                    <a 
                      href={selectedProject.links.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="mono-font"
                      style={{
                        fontSize: '0.66rem',
                        padding: '4px 10px',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        color: 'var(--text-secondary)',
                        background: 'rgba(255,255,255,0.02)',
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
                  )}
                  {selectedProject.links?.live && (
                    <a 
                      href={selectedProject.links.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="mono-font"
                      style={{
                        fontSize: '0.66rem',
                        padding: '4px 10px',
                        border: '1px solid var(--accent)',
                        borderRadius: '4px',
                        color: 'var(--accent)',
                        background: 'var(--accent-glow)',
                        transition: 'opacity var(--transition)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Dashboard Tabs */}
                <div style={{
                  display: 'flex',
                  background: 'rgba(0,0,0,0.25)',
                  padding: '3px',
                  borderRadius: '6px',
                  border: '1px solid var(--border)'
                }}>
                  {['01. Architecture', '02. Troubleshooting', '03. Evolution'].map((tabLabel, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.68rem',
                        padding: '5px 12px',
                        borderRadius: '4px',
                        background: currentSlide === idx ? 'var(--bg-surface)' : 'transparent',
                        color: currentSlide === idx ? 'var(--accent)' : 'var(--text-secondary)',
                        fontWeight: currentSlide === idx ? '600' : '400',
                        transition: 'all var(--transition)',
                        border: currentSlide === idx ? '1px solid var(--border)' : '1px solid transparent'
                      }}
                    >
                      {tabLabel}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Slider Content Wrapper */}
            <div style={{
              flex: 1,
              width: '100%',
              overflow: 'hidden',
              position: 'relative'
            }}>
              {/* Sliding Container */}
              <div style={{
                display: 'flex',
                width: '300%',
                height: '100%',
                transform: `translateX(-${(currentSlide * 100) / 3}%)`,
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}>
                
                {/* ── Slide 1: Architecture & Deliverables ── */}
                <div style={{ width: 'calc(100% / 3)', height: '100%', overflowY: 'auto', padding: '24px 32px' }}>
                  <div className="project-grid-responsive">
                    {/* Diagram Terminal Window */}
                    <div className="border-offset-box" style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '12px',
                        borderBottom: '1px solid var(--border)',
                        paddingBottom: '8px'
                      }}>
                        <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#FF7B97' }} />
                        <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#FFD366' }} />
                        <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#7DFFD6' }} />
                        <span className="mono-font" style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginLeft: '8px' }}>
                          architecture_diagram.txt
                        </span>
                      </div>
                      <pre style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.66rem',
                        color: 'var(--accent)',
                        background: 'rgba(0,0,0,0.3)',
                        padding: '12px',
                        borderRadius: '4px',
                        overflowX: 'auto',
                        border: '1px solid var(--border)',
                        lineHeight: '1.35',
                        flex: 1
                      }}>
                        {selectedProject.architecture.diagram}
                      </pre>
                    </div>

                    {/* Tech & Deliverables list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div className="border-offset-box" style={{ padding: '14px 18px' }}>
                        <h4 className="mono-font" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>
                          // Spec badges
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                          {selectedProject.badges.map((b, i) => (
                            <span key={i} className="mono-font" style={{
                              fontSize: '0.66rem',
                              padding: '3px 8px',
                              borderRadius: '4px',
                              border: '1px solid var(--border)',
                              background: 'rgba(255,255,255,0.01)',
                              color: 'var(--text-secondary)'
                            }}>{b}</span>
                          ))}
                        </div>
                      </div>

                      <div className="border-offset-box" style={{ padding: '18px', flex: 1 }}>
                        <h4 className="mono-font" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase' }}>
                          // Key Engineering Deliverables
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {selectedProject.architecture.deliverables.map((item, idx) => (
                            <li key={idx} style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '6px',
                              fontSize: '0.78rem',
                              color: 'var(--text-secondary)',
                              lineHeight: '1.45'
                            }}>
                              <span className="mono-font" style={{ color: 'var(--accent)', marginTop: '1px' }}>→</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Slide 2: Troubleshooting ── */}
                <div style={{ width: 'calc(100% / 3)', height: '100%', overflowY: 'auto', padding: '24px 32px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className="project-grid-responsive">
                      {/* Root Cause */}
                      <div className="border-offset-box" style={{
                        padding: '16px',
                        borderLeft: '4px solid var(--danger)',
                        background: 'rgba(255, 123, 151, 0.01)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                          <span className="mono-font" style={{
                            fontSize: '0.58rem',
                            color: 'var(--danger)',
                            background: 'var(--danger-dim)',
                            padding: '1px 5px',
                            borderRadius: '3px',
                            fontWeight: '700'
                          }}>ROOT CAUSE</span>
                          <h4 style={{ fontSize: '0.78rem', color: 'var(--text-primary)', fontWeight: '600' }}>문제원인</h4>
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                          {selectedProject.troubleshooting.cause}
                        </p>
                      </div>

                      {/* Resolution */}
                      <div className="border-offset-box" style={{
                        padding: '16px',
                        borderLeft: '4px solid var(--success)',
                        background: 'rgba(125, 255, 214, 0.01)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                          <span className="mono-font" style={{
                            fontSize: '0.58rem',
                            color: 'var(--success)',
                            background: 'var(--success-dim)',
                            padding: '1px 5px',
                            borderRadius: '3px',
                            fontWeight: '700'
                          }}>RESOLUTION</span>
                          <h4 style={{ fontSize: '0.78rem', color: 'var(--text-primary)', fontWeight: '600' }}>해결 과정 및 아키텍처 변경</h4>
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                          {selectedProject.troubleshooting.resolution}
                        </p>
                      </div>
                    </div>

                    {/* Results Table */}
                    <div className="border-offset-box" style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                        <span className="mono-font" style={{
                          fontSize: '0.58rem',
                          color: 'var(--text-primary)',
                          border: '1px solid var(--border)',
                          padding: '1px 5px',
                          borderRadius: '3px'
                        }}>QUANTIFIED RESULTS</span>
                        <h4 style={{ fontSize: '0.78rem', color: 'var(--text-primary)', fontWeight: '600' }}>수량화된 성과 및 성능 지표</h4>
                      </div>
                      
                      <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        textAlign: 'left',
                        fontFamily: 'var(--mono)',
                        fontSize: '0.74rem'
                      }}>
                        <thead>
                          <tr style={{ borderBottom: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                            <th style={{ padding: '8px' }}>METRIC</th>
                            <th style={{ padding: '8px' }}>BEFORE</th>
                            <th style={{ padding: '8px' }}>AFTER</th>
                            <th style={{ padding: '8px', color: 'var(--accent)' }}>IMPROVEMENT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ borderBottom: '1px solid var(--border)' }}>
                            <td style={{ padding: '10px 8px', color: 'var(--text-primary)', fontWeight: '500' }}>구독 및 트래픽 신뢰성</td>
                            <td style={{ padding: '10px 8px', color: 'var(--danger)' }}>특정 디바이스 작동 차단</td>
                            <td style={{ padding: '10px 8px', color: 'var(--success)' }}>전기종 크로스 브라우징 지원</td>
                            <td style={{ padding: '10px 8px', color: 'var(--accent)' }}>성공률 100% 확보</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '10px 8px', color: 'var(--text-primary)', fontWeight: '500' }}>디버깅 및 유지보수 비용</td>
                            <td style={{ padding: '10px 8px', color: 'var(--text-secondary)' }}>플랫폼별 개별 대응</td>
                            <td style={{ padding: '10px 8px', color: 'var(--text-primary)' }}>Monorepo Shared 유틸화</td>
                            <td style={{ padding: '10px 8px', color: 'var(--accent)' }}>코드 중복 0%</td>
                          </tr>
                        </tbody>
                      </table>

                      <div style={{
                        marginTop: '12px',
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                        background: 'rgba(0,0,0,0.2)',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        border: '1px dashed var(--border)'
                      }}>
                        <strong>Engineers Note:</strong> {selectedProject.troubleshooting.results}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Slide 3: Evolution & Reflection ── */}
                <div style={{ width: 'calc(100% / 3)', height: '100%', overflowY: 'auto', padding: '24px 32px' }}>
                  <div className="project-grid-responsive">
                    {/* Limitations */}
                    <div className="border-offset-box" style={{ padding: '18px', display: 'flex', flexDirection: 'column' }}>
                      <h4 className="mono-font" style={{
                        fontSize: '0.72rem',
                        color: 'var(--danger)',
                        marginBottom: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <span>⚠</span> Technical Limitations (현재 설계의 한계)
                      </h4>
                      <div style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6',
                        flex: 1,
                        background: 'rgba(0,0,0,0.2)',
                        padding: '14px',
                        borderRadius: '4px',
                        border: '1px solid var(--border)'
                      }}>
                        <p style={{ marginBottom: '10px' }}>
                          비용 효율성과 서버리스 구축에 맞춤으로써 트레이드오프된 한계입니다.
                        </p>
                        <p style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                          {selectedProject.evolution.limitations}
                        </p>
                      </div>
                    </div>

                    {/* Next Sprint Plans */}
                    <div className="border-offset-box" style={{ padding: '18px' }}>
                      <h4 className="mono-font" style={{
                        fontSize: '0.72rem',
                        color: 'var(--accent)',
                        marginBottom: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <span>📈</span> Next Sprint (고도화 및 마이그레이션 계획)
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {selectedProject.evolution.nextSprint.map((plan, i) => (
                          <div key={i} style={{
                            display: 'flex',
                            gap: '8px',
                            alignItems: 'flex-start',
                            background: 'rgba(0,0,0,0.1)',
                            border: '1px solid var(--border)',
                            padding: '10px 12px',
                            borderRadius: '4px'
                          }}>
                            <div className="mono-font" style={{
                              color: 'var(--accent)',
                              background: 'var(--accent-dim)',
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.62rem',
                              fontWeight: '700',
                              flexShrink: 0
                            }}>
                              {i + 1}
                            </div>
                            <p style={{
                              fontSize: '0.78rem',
                              color: 'var(--text-secondary)',
                              lineHeight: '1.4',
                              marginTop: '1px'
                            }}>
                              {plan}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Detail Panel Footer (Slider controls) */}
            <div style={{
              padding: '14px 32px',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.1)'
            }}>
              {/* Progress Indicator */}
              <div style={{ display: 'flex', gap: '4px' }}>
                {[0, 1, 2].map((slideIdx) => (
                  <span 
                    key={slideIdx}
                    style={{
                      display: 'inline-block',
                      width: currentSlide === slideIdx ? '24px' : '8px',
                      height: '4px',
                      background: currentSlide === slideIdx ? 'var(--accent)' : 'var(--border)',
                      borderRadius: '2px',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  onClick={prevSlide}
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.68rem',
                    padding: '5px 12px',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    color: 'var(--text-secondary)',
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
                  &lt;─ PREV
                </button>
                <button 
                  onClick={nextSlide}
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.68rem',
                    padding: '5px 12px',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    color: 'var(--text-secondary)',
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
                  NEXT ─&gt;
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
