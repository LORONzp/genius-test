document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (a) {
    a.preventDefault();
    document
      .querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
