// lib/animations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RoughEase } from "gsap/EasePack";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, RoughEase);

// Basic fade in animation - used site-wide for text and UI elements
export function fadeIn(target, options = {}) {
  return gsap.from(target, {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: 'power2.out',
    ...options
  });
}

// Initialize all animations
export function initAnimations(options = {}) {
  // Hero section animations
  gsap.from('.hero-title', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power2.out"
  });

  gsap.from('.hero-subtitle', {
    duration: 1,
    y: 20,
    opacity: 0,
    delay: 0.2,
    ease: "power2.out"
  });

  gsap.from('.hero-buttons', {
    duration: 0.8,
    y: 20,
    opacity: 0,
    delay: 0.4,
    ease: "power2.out"
  });

  // Animate initiative cards with fade in
  gsap.utils.toArray('.initiative-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: "play none none none"
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1
    });
  });

  // Animate stats with number counting
  gsap.utils.toArray('.stat-number').forEach((stat) => {
    const targetNumber = parseInt(stat.textContent);
    gsap.to(stat, {
      scrollTrigger: {
        trigger: stat,
        start: 'top 85%',
        toggleActions: "play none none none",
        onEnter: () => {
          let count = { value: 0 };
          gsap.to(count, {
            value: targetNumber,
            duration: 1.5,
            ease: "power1.out",
            onUpdate: () => {
              stat.textContent = Math.round(count.value) + '+';
            }
          });
        }
      },
      opacity: 1,
      duration: 0.5
    });
  });

  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            autoKill: false
          },
          ease: "power2.inOut"
        });
      }
    });
  });
}

// Card hover animation
export function initCardAnimations() {
  const cards = document.querySelectorAll('.initiative-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
}
