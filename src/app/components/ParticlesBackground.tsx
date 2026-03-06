'use client';

import React, { useEffect, useRef } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine, Container } from '@tsparticles/engine'

export default function ParticlesBackground() {
  const containerRef = useRef<Container | null>(null);
  const [init, setInit] = React.useState(false);

  async function loadingParticles(engine: Engine) {
    await loadSlim(engine)
  }

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      containerRef.current = container;
    }
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const heroSection = document.querySelector('#hero, [data-section="hero"], section:first-of-type');
      
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isInHero = e.clientY >= rect.top && e.clientY <= rect.bottom;
        
        if (containerRef.current.options.interactivity?.events?.onHover) {
          containerRef.current.options.interactivity.events.onHover.enable = isInHero;
        }
        if (containerRef.current.options.interactivity?.events?.onClick) {
          containerRef.current.options.interactivity.events.onClick.enable = isInHero;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!init) {
    return null; // or a loading spinner
  }

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <Particles
        id="tsparticles"
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'auto',
          zIndex: 0,
        }}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          background: {
            color: {
              value: 'transparent'
            }
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                width: 800
              }
            },
            color: {
              value: ['#10b981', '#14b8a6', '#2dd4bf', '#5eead4', '#22c55e', '#34d399']
            },
            shape: {
              type: 'circle'
            },
            opacity: {
              value: { min: 0.3, max: 0.6 },
              animation: {
                enable: true,
                speed: 0.5,
                sync: false
              }
            },
            size: {
              value: { min: 1, max: 3 },
              animation: {
                enable: true,
                speed: 2,
                sync: false
              }
            },
            links: {
              enable: false,
              distance: 150,
              color: '#14b8a6',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: true,
              straight: false,
              outModes: {
                default: 'bounce'
              },
              attract: {
                enable: false,
                rotate: { x: 600, y: 1200 }
              }
            }
          },
          interactivity: {
            detectsOn: 'window',
            events: {
              onHover: {
                enable: true,
                mode: 'grab'
              },
              onClick: {
                enable: true,
                mode: 'push'
              },
              resize: { enable: true }
            },
            modes: {
              grab: {
                distance: 200,
                links: { 
                  opacity: 0.8,
                  color: '#2dd4bf'
                }
              },
              push: {
                quantity: 4
              }
            }
          },
          detectRetina: true
        }}
      />
    </div>
  )
}