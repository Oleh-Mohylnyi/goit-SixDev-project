(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
    };
  
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
      document.body.classList.toggle("scroll-lock");
      refs.menu.classList.toggle('is-close');
    }
  })();