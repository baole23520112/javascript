'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Implement button scroll to section 1
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////////////////////////
// Page navigation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////////////////////////////////
// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Active button
  document
    .querySelector('.operations__tab--active')
    .classList.remove('operations__tab--active');
  clicked.classList.add('operations__tab--active');

  // Active content area
  document
    .querySelector('.operations__content--active')
    .classList.remove('operations__content--active');
  const content = document.querySelector(
    `.operations__content--${clicked.dataset.tab}`
  );
  content.classList.add('operations__content--active');
});

///////////////////////////////////////////////////////////////
// Hover faded animation
const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};

// Passing 'argument' into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

////////////////////////////////////////////////////////////////
// Sticky navigation
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

////////////////////////////////////////////////////////
// Reveal section
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

////////////////////////////////////////////////////////
// Lazy load
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src width data-src
  entry.target.src = entry.target.dataset.src;

  // Remove blur
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  // Remove observe
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

/////////////////////////////////////////////////////////
// Building a Slider Component
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length;

// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';

// Function
const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activeDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const moveRight = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activeDot(curSlide);
};

const moveLeft = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
  activeDot(curSlide);
};

const init = function() {
  goToSlide(curSlide);
  createDots();
  activeDot(curSlide);
};

init();

// Next slide
btnRight.addEventListener('click', moveRight);

// Previous slide
btnLeft.addEventListener('click', moveLeft);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') moveRight();
  else if (e.key === 'ArrowLeft') moveLeft();
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activeDot(slide);
  }
});

document.addEventListener('DOMContentLoaded', function(e) {
  console.log('DOM', e);
})

window.addEventListener('load', function(e) {
  console.log('Page fully loaded', e);
});

window.addEventListener('beforeunload', function(e) {
  e.preventDefault();
  console.log('R U SURE');
  e.returnValue = '';
});

// // Selecting elements
// console.log(document.documentElement); // document is not a real DOM
// console.log(document.head); // document is not a real DOM
// console.log(document.body); // document is not a real DOM
// const header = document.querySelector('.header');
// console.log(document.querySelectorAll('section')); // can't update, return NodeList
// console.log(document.getElementById('section--1'));
// console.log(document.getElementsByTagName('button')); // update automatically, return HTMLCollection

// console.log(document.getElementsByClassName('btn')); // update automatically, return HTMLCollection

/*
// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it</button>';

// just 1 child ok not multi children
// header.prepend(message); // add like first child
header.append(message); // add like last child
// header.append(message.cloneNode(true)); // copy

// header.before(message);
header.after(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// STYLE
message.style.backgroundColor = '#2f3135'; // add by css inline
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// ATTRIBUTES
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo'

// NON-STANDARD
console.log(logo.people); // doesn't work with manual attribute
console.log(logo.getAttribute('people'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src); // absolute link
console.log(logo.getAttribute('src')); // relative link

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// DATA ATTRIBUTES: start with 'data-'
console.log(logo.dataset.versionNumber);

// CLASSES
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// dont use
logo.className = 'jonas';
*/
//   const s1coords = section1.getBoundingClientRect(); // get coordinates of section1 relative in viewport
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect()); // get coordinates of section1 relative in viewport when clicking

//   console.log('Current scroll (X/Y):', window.scrollX, window.scrollY);

//   console.log('height/width viewport: ', document.documentElement.clientHeight, document.documentElement.clientWidth);

//   Scrolling
//   window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);

//   window.scrollTo({
//     left: s1coords.left + window.scrollX,
//     top: s1coords.top + window.scrollY,
//     behavior: 'smooth'
//   });

// const h1 = document.querySelector('h1');

// const alertH1 = function(e) {
//   alert(`Great, you're crazy right now`);

//   h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = (e) => {
//   alert(`Great, you're crazy right now`);
// };

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   console.log(e, e.target, e.currentTarget);
//   this.style.background = randomColor();
// })
// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   console.log(e, e.target, e.currentTarget);
//   this.style.background = randomColor();
// })
// document.querySelector('.nav').addEventListener('click', function(e) {
//   console.log(e, e.target, e.currentTarget);
//   this.style.background = randomColor();
// })

// const h1 = document.querySelector('h1');

// // Going downwards: child element
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'red';
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards: parent element
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)'

// // Going sideways siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.parentElement.children);
