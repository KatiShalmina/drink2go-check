import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const mainNavList = document.querySelector('.main-nav__list');
const toggleButton = document.querySelector('.js-toggle-button');

const backgrounds = ['#f3ebe1', '#eae6fc', '#e5e6e8'];
const slides = [
  {
    image: {
      mobile: {
        png: 'images/slider-flat-white-mobile@1x.png',
        png2x: 'images/slider-flat-white-mobile@2x.png',
        webp: 'images/slider-flat-white-mobile@1x.webp',
        webp2x: 'images/slider-flat-white-mobile@2x.webp',
      },
      tablet: {
        png: 'images/slider-flat-white-tablet@1x.png',
        png2x: 'images/slider-flat-white-tablet@2x.png',
        webp: 'images/slider-flat-white-tablet@1x.webp',
        webp2x: 'images/slider-flat-white-tablet@2x.webp',
      },
      desktop: {
        png: 'images/slider-flat-white-desktop@1x.png',
        png2x: 'images/slider-flat-white-desktop@2x.png',
        webp: 'images/slider-flat-white-desktop@1x.webp',
        webp2x: 'images/slider-flat-white-desktop@2x.webp',
      },
      alt: 'Кофейный напиток Декаф Флэт Уайт',
    },
    title: 'Декаф Флэт Уайт',
    description:
      'Свежесваренный кофе без кофеина из Эфиопии<br> с натуральным фермерским молоком — то, что нужно для расслабления после тяжёлого рабочего дня',
    background: backgrounds[0]
  },
  {
    image: {
      mobile: {
        png: 'images/slider-lavender-latte-mobile@1x.png',
        png2x: 'images/slider-lavender-latte-mobile@2x.png',
        webp: 'images/slider-lavender-latte-mobile@1x.webp',
        webp2x: 'images/slider-lavender-latte-mobile@2x.webp',
      },
      tablet: {
        png: 'images/slider-lavender-latte-tablet@1x.png',
        png2x: 'images/slider-lavender-latte-tablet@2x.png',
        webp: 'images/slider-lavender-latte-tablet@1x.webp',
        webp2x: 'images/slider-lavender-latte-tablet@2x.webp',
      },
      desktop: {
        png: 'images/slider-lavender-latte-desktop@1x.png',
        png2x: 'images/slider-lavender-latte-desktop@2x.png',
        webp: 'images/slider-lavender-latte-desktop@1x.webp',
        webp2x: 'images/slider-lavender-latte-desktop@2x.webp',
      },
      alt: 'Кофейный напиток Лавандовый Латте',
    },
    title: 'Лавандовый Латте',
    description:
      'Невероятное сочетание перуанской высокогорной арабики с молоком ламы и лавандовым сиропом унесёт вас прямо на вершину Радужных гор',
    background: backgrounds[1],
  },
  {
    image: {
      mobile: {
        png: 'images/slider-triple-espresso-mobile@1x.png',
        png2x: 'images/slider-triple-espresso-mobile@2x.png',
        webp: 'images/slider-triple-espresso-mobile@1x.webp',
        webp2x: 'images/slider-triple-espresso-mobile@2x.webp',
      },
      tablet: {
        png: 'images/slider-triple-espresso-tablet@1x.png',
        png2x: 'images/slider-triple-espresso-tablet@2x.png',
        webp: 'images/slider-triple-espresso-tablet@1x.webp',
        webp2x: 'images/slider-triple-espresso-tablet@2x.webp',
      },
      desktop: {
        png: 'images/slider-triple-espresso-desktop@1x.png',
        png2x: 'images/slider-triple-espresso-desktop@2x.png',
        webp: 'images/slider-triple-espresso-desktop@1x.webp',
        webp2x: 'images/slider-triple-espresso-desktop@2x.webp',
      },
      alt: 'Кофейный напиток Тройной Эспрессо',
    },
    title: 'Тройной Эспрессо',
    description:
      'Мощнее укола адреналина, чернее самой тёмной ночи, этот тройной эспрессо из Колумбии покажет вам, что такое настоящая бодрость',
    background: backgrounds[2],
  },
];

const sliderContainer = document.querySelector('.hero');
const sliderTitle = document.querySelector('.slider__title');
const sliderDescription = document.querySelector('.slider__description');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');
const paginationButtons = document.querySelectorAll('.slider__button-pagination');
const sliderPicture = document.querySelector('.hero__slider picture');
let currentSlide = 0;

const rangeSlider = document.querySelector('.range-scale');
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');

// main-nav__list--open js-toggle-button--close
toggleButton.addEventListener('click', () => {
  mainNavList.classList.toggle('main-nav__list--open');
  toggleButton.classList.toggle('js-toggle-button--close');
});

// hero__slider
function updateSlide() {
  const slide = slides[currentSlide];

  const sources = sliderPicture.querySelectorAll('source');
  const img = sliderPicture.querySelector('img');

  // Обновляем атрибуты <source> для webp и png
  sources[0].media = '(min-width: 1440px)';
  sources[0].srcset = `${slide.image.desktop.webp} 1x, ${slide.image.desktop.webp2x} 2x`;

  sources[1].media = '(min-width: 768px)';
  sources[1].srcset = `${slide.image.tablet.webp} 1x, ${slide.image.tablet.webp2x} 2x`;

  sources[2].srcset = `${slide.image.mobile.webp} 1x, ${slide.image.mobile.webp2x} 2x`;

  sources[3].media = '(min-width: 1440px)';
  sources[3].srcset = `${slide.image.desktop.png} 1x, ${slide.image.desktop.png2x} 2x`;

  sources[4].media = '(min-width: 768px)';
  sources[4].srcset = `${slide.image.tablet.png} 1x, ${slide.image.tablet.png2x} 2x`;

  // Обновляем <img>
  img.src = slide.image.mobile.png;
  img.srcset = `${slide.image.mobile.png2x} 2x`;
  img.alt = slide.image.alt;

  sliderTitle.textContent = slide.title;
  sliderDescription.innerHTML = slide.description;

  if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    sliderContainer.style.background = `linear-gradient(to bottom, ${slide.background} 77%, #ffffff 77%, #ffffff)`;
  } else {
    sliderContainer.style.background = slide.background;
  }

  prevButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.length - 1;
}

window.addEventListener('resize', updateSlide);

prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
});

nextButton.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlide();
  }
});

updateSlide();

// slider__pagination
paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    paginationButtons.forEach((btn) => btn.classList.remove('slider__button-pagination--current'));

    button.classList.add('slider__button-pagination--current');

    currentSlide = index;
    updateSlide();
  });
});

// range-slider
noUiSlider.create(rangeSlider, {
  start: [0, 900], // начальные значения
  connect: true, // закрашенный диапазон между ползунками
  range: {
    min: 0,
    max: 1000
  },
  step: 10, // шаг передвижения ползунков
  format: {
    to: (value) => Math.round(value), // округление
    from: (value) => Number(value)
  }
});

rangeSlider.noUiSlider.on('update', (values) => {
  minPriceInput.value = values[0];
  maxPriceInput.value = values[1];
});

minPriceInput.addEventListener('change', () => {
  rangeSlider.noUiSlider.set([minPriceInput.value, null]);
});

maxPriceInput.addEventListener('change', () => {
  rangeSlider.noUiSlider.set([null, maxPriceInput.value]);
});
