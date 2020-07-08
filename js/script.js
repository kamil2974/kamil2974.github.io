const slider = tns({
  container: '.carousel',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  controls: false
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});