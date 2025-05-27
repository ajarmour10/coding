// scroll-animations.js
// GSAP ScrollTrigger animations for showcase sections

document.addEventListener('DOMContentLoaded', () => {
  // Ensure GSAP & ScrollTrigger are available
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray('.section-showcase');

  sections.forEach((section) => {
    const img = section.querySelector('.showcase-img');
    const heading = section.querySelector('h2');

    // Image scale / fade
    gsap.fromTo(
      img,
      { scale: 0.85, opacity: 0, y: 40 },
{
  scale: 1,
  opacity: 1,
  y: 0,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: section,
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  },
  }
});

    // Heading slide up
    gsap.fromTo(
      heading,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });
  // Decorative tire tracks
  sections.forEach((section) => {
    const track = document.createElement('div');
    track.classList.add('tire-track');
    section.appendChild(track);

    gsap.fromTo(
      track,
      { opacity: 0, y: 50 },
      {
        opacity: 0.6,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });
});
