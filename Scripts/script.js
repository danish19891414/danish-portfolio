  // Smooth scroll for all anchor links (fixes fixed-navbar offset)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 52;
        window.scrollTo({ top: top < 10 ? 0 : top, behavior: 'smooth' });
      }
    });
  });

  // Boot-sequence typewriter effect
  const lines = document.querySelectorAll('.typewriter-line');
  lines.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, i * 320 + 200);
  });

  // Active nav highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.style.color = '';
          if (a.getAttribute('href') === '#' + entry.target.id) {
            a.style.color = 'var(--green)';
          }
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));

  // Tag hover glow
  document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      tag.style.color = 'var(--green)';
      tag.style.borderColor = 'var(--green-mid)';
      tag.style.textShadow = '0 0 8px var(--green-glow)';
    });
    tag.addEventListener('mouseleave', () => {
      tag.style.color = '';
      tag.style.borderColor = '';
      tag.style.textShadow = '';
    });
  });
