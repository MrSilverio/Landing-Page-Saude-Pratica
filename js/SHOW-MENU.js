const hamburgerBtn = document.getElementById('hamburger-btn');
const navBar = document.getElementById('nav-bar');

hamburgerBtn.addEventListener('click', () => {
  // Alterna a classe 'active' no botão e na nav
  hamburgerBtn.classList.toggle('active');
  navBar.classList.toggle('active');

  // Atualiza o ARIA para acessibilidade
  const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
  hamburgerBtn.setAttribute('aria-expanded', !isExpanded);

  // Trava o scroll da página
  document.body.classList.toggle('no-scroll');
});

// Opcional: Fecha o menu ao clicar em um link (útil para navegação na mesma página)
navBar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navBar.classList.contains('active')) {
      hamburgerBtn.classList.remove('active');
      navBar.classList.remove('active');
      document.body.classList.remove('no-scroll');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  });
});