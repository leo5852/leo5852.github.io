// 캐러셀: 점(dot)은 슬라이드 개수에 맞춰 자동으로 만들어진다.
// 사진/영상을 추가할 때는 .issue-slide 블록만 추가하면 되고, 점 버튼은 직접 넣지 않아도 된다.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.issue-carousel').forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('.issue-slide'));
    const dotsWrap = carousel.querySelector('.issue-dots');
    const prevBtn = carousel.querySelector('.issue-arrow-prev');
    const nextBtn = carousel.querySelector('.issue-arrow-next');
    if (slides.length === 0) return;

    // 슬라이드가 하나뿐이면 점과 화살표를 숨긴다
    if (slides.length < 2) carousel.classList.add('is-single');

    let dots = [];
    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      dots = slides.map((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'issue-dot';
        dot.setAttribute('aria-label', `${i + 1}번째 항목`);
        dot.addEventListener('click', () => show(i));
        dotsWrap.appendChild(dot);
        return dot;
      });
    }

    let current = 0;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const active = i === current;
        slide.classList.toggle('active', active);
        // 화면에서 사라진 슬라이드의 영상은 멈춘다
        if (!active) slide.querySelectorAll('video').forEach((v) => v.pause());
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === current);
        dot.setAttribute('aria-current', i === current ? 'true' : 'false');
      });
    }

    prevBtn?.addEventListener('click', () => show(current - 1));
    nextBtn?.addEventListener('click', () => show(current + 1));

    show(0);
  });
});
