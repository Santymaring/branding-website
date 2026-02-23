(function () {
  'use strict';

  // 1. Marcar el link activo en la navegación
  function setActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.site-nav a');
    links.forEach(link => {
      if (link.getAttribute('href') === path) {
        link.classList.add('active');
      }
    });
  }

  // 2. Efecto de Header al hacer scroll
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // 3. Menú Móvil (Toggle)
  function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // 4. Scroll Reveal (Aparición de elementos)
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Solo se anima una vez
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
  }

  // Inicialización de todas las funciones
  document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    initHeaderScroll();
    initMobileNav();
    initScrollReveal();
  });

})();