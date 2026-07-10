import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll Snap 컨테이너 감시
    const container = document.querySelector('.snap-container');
    if (!container) return;

    const sections = document.querySelectorAll('.snap-section');
    const observerOptions = {
      root: container,
      rootMargin: '0px',
      threshold: 0.5, // 50% 이상 노출 시 활성화
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    // 스크롤 감지하여 보더 하이라이트 제어
    const handleScroll = () => {
      if (container.scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '64px',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(30, 30, 30, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'border-color var(--transition)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('hero')}
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '1rem',
            fontWeight: '700',
            color: 'var(--accent)',
            letterSpacing: '0.04em'
          }}
        >
          jisu.dev<span className="cursor-blink"></span>
        </button>

        {/* Links */}
        <ul style={{
          display: 'flex',
          gap: '32px'
        }}>
          {[
            { id: 'about', label: 'introduce' },
            { id: 'projects', label: 'projects' },
            { id: 'contact', label: 'contact' }
          ].map((item) => {
            const isItemActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.78rem',
                    color: isItemActive ? 'var(--accent)' : 'var(--text-secondary)',
                    letterSpacing: '0.08em',
                    textTransform: 'lowercase',
                    transition: 'color var(--transition)',
                    position: 'relative',
                    padding: '4px 0'
                  }}
                >
                  {item.label}
                  {isItemActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '1.5px',
                      background: 'var(--accent)',
                      borderRadius: '2px'
                    }} />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
