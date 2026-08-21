document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.issue-carousel').forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('.issue-slide'));
    const dots = Array.from(carousel.querySelectorAll('.issue-dot'));
    const prevBtn = carousel.querySelector('.issue-arrow-prev');
    const nextBtn = carousel.querySelector('.issue-arrow-next');
    let current = 0;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
      dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    }

    dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
    prevBtn?.addEventListener('click', () => show(current - 1));
    nextBtn?.addEventListener('click', () => show(current + 1));

    show(0);
  });
});
