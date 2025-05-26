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
      { scale: 0.6, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

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
  const trackSVG =
    '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M0 0 Q50 100 100 0 T200 0 T300 0 T400 0" stroke="#444" stroke-width="4" fill="none" stroke-dasharray="10 10" />' +
    '</svg>';

  sections.forEach((section, idx) => {
    const track = document.createElement('div');
    track.classList.add('tire-track');
    track.innerHTML = trackSVG;
    section.appendChild(track);

    gsap.fromTo(
      track,
      { opacity: 0, y: 50 },
      {
        opacity: 0.5,
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
