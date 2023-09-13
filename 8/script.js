// (function() {
//     const slider = document.querySelector('.slider');
//     const wrapper = document.querySelector('.slider__wrapper');
//     const innerWrapper = document.querySelector('.slider__inner-wrapper');
//     const slides = [...document.querySelectorAll('.slider__slide')];
//     const slidesCount = slides.lenght;
//     const buttonBack = document.querySelector('.slider__button_back-js');
//     const buttonNext = document.querySelector('.slider__button_next-js');
//     const pagination = document.querySelector('.slider__pagination_js');
//     const ANIMATION_TIME = 500;

//     let activeSlideIndex = 0;
//     let slideWidth = wrapper.offsetWidth;

//     initWidth();
//     setActiveSlide(0, false);

//     buttonNext.addEventListener('click', () => {
//         setActiveSlide(activeSlideIndex + 1)
//     })

//     buttonBack.addEventListener('click', () => {
//         setActiveSlide(activeSlideIndex - 1)
//     })

//     window.addEventListener('resize', () => {
//         initWidth()
//     })

//     function setActiveSlide(index, withAnimation = true) {
//         if (index < 0 || index >= slidesCount) return;

//         buttonBack.removeAttribute('disable');
//         buttonNext.removeAttribute('disable');

//         innerWrapper.style.transform = `translateX(${index * slideWidth * (-1)}px)`;

//         if (index === 0) {
//             buttonBack.setAttribute('disable', '');
//         };

//         if (index === slidesCount - 1) {
//             buttonNext.setAttribute('disable', '');
//         };

//         activeSlideIndex = index;
//     }

//     function initWidth() {
//         slideWidth = wrapper.offsetWidth;

//         slides.forEach(slide => {
//             slide.style.width = `${slideWidth}px`
//         })
//     }
// })()

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'creative',
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });