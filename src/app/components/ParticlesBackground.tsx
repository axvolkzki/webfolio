'use client';

import React, { useEffect, useRef } from 'react'
import Particle from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Engine, Container } from 'tsparticles-engine'

export default function ParticlesBackground() {
  const containerRef = useRef<Container | null>(null);

  async function loadingParticles(engine: Engine) {
    await loadFull(engine)
  }

  // This function will be called when particles are ready
  const particlesLoaded = async (container?: Container) => {
    if (container) {
      containerRef.current = container;
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      // Get the hero section element (adjust selector to match your hero section)
      const heroSection = document.querySelector('#hero, [data-section="hero"], section:first-of-type');
      
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isInHero = e.clientY >= rect.top && e.clientY <= rect.bottom;
        
        // Enable/disable interactivity based on mouse position
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

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <Particle
        id="tsparticles"
        init={loadingParticles}
        loaded={particlesLoaded}
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
                area: 800
              }
            },
            color: {
              value: ['#10b981', '#14b8a6', '#2dd4bf', '#5eead4', '#22c55e', '#34d399']
            },
            stroke: {
              width: 0,
              color: '#000000'
            },
            shape: {
              type: 'circle'
            },
            opacity: {
              value: 0.6,
              random: true,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.3,
                sync: false
              }
            },
            size: {
              value: { min: 1, max: 3 },
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
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
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detectsOn: 'window',
            events: {
              onHover: {
                enable: true, // Will be controlled dynamically
                mode: 'grab'
              },
              onClick: {
                enable: true, // Will be controlled dynamically
                mode: 'push'
              },
              resize: true
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
          retinaDetect: true
        }}
      />
    </div>
  )
}