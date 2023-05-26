(() => {
  const mobileMenu = document.querySelector('.js-mobmenu-container');
  const openMenuBtn = document.querySelector('.js-open-mobmenu');
  const closeMenuBtn = document.querySelector('.js-close-mobmenu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';

    if (mobileMenu.classList.contains('is-open')) {
      document.body.style.overflow = 'hidden';
      // bodyScrollLock[scrollLockMethod](document.body);
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  if (openMenuBtn && closeMenuBtn) {
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  }

  // Close the mobile menu on wider screens if the device orientation changes
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  const handleMediaQueryChange = e => {
    if (!e.matches) {
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      // bodyScrollLock.enableBodyScroll(document.body);
    }
  };

  mediaQuery.addEventListener('change', handleMediaQueryChange);
})();
