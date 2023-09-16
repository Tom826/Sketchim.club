//const { off } = require("gulp");

//menu
const button = document.querySelector(".header__button"),
    toggle = document.querySelector(".navigation__toggle"),
    nav__list = document.querySelector(".navigation__list");

const menu_open = function() {
    nav__list.classList.remove('navigation__list-closed');
    nav__list.classList.add('navigation__list-opened');
}

const menu_close = function() {
    nav__list.classList.add('navigation__list-closed');
    nav__list.classList.remove('navigation__list-opened');
}

button.addEventListener('click', menu_open);
toggle.addEventListener('click', menu_close);


//slider
const imgArr= document.querySelectorAll('.slider__img'),
      btnNext= document.querySelector('.controls__button--next'),
      btnPrev= document.querySelector('.controls__button--prev'), 
      curNum= document.querySelector('#current'), 
      wrapper= document.querySelector('.slider__img-wrapper'),
      maxNum= document.querySelector('#total'),
      width = window.getComputedStyle(wrapper).width;
let index = 0, // будет определять наш текущий слайд
    curSld = 1,
    len = imgArr.length;

console.log(width);

curNum.textContent = curSld;
maxNum.textContent = len;

function transferNext(i) {
  if(curSld == len) {
    index = 0;
    curSld = 1;
    i.forEach(e => {
      if(width == "1190px") {
        e.style.transform = `translateX(${index * (-118)}%)`;
      }
      else {
        e.style.transform = `translateX(${index * (-108)}%)`;
      }
    })
  }
  else {
    index++;
    curSld++;
    i.forEach(e => {
      if(width == "1190px") {
        e.style.transform = `translateX(${index * (-118)}%)`;
      }
      else {
        e.style.transform = `translateX(${index * (-108)}%)`;
      }
    })
  }  
  curNum.textContent = curSld;
}

function transferPrev(i) {
  if(curSld == 1) {
    index = len-1;
    curSld = len;
    i.forEach(e => {
      if(width == "1190px") {
        e.style.transform = `translateX(${index * (-118)}%)`;
      }
      else {
        e.style.transform = `translateX(${index * (-108)}%)`;
      }
    })
  }
  else {
    index--;
    curSld--;
    i.forEach(e => {
      if(width == "1190px") {
        e.style.transform = `translateX(${index * (-118)}%)`;
      }
      else {
        e.style.transform = `translateX(${index * (-108)}%)`;
      }
    })    
  }
  curNum.textContent = curSld;
}

wrapper.style.overflow = 'hidden';

btnNext.addEventListener('click', () => {
  transferNext(imgArr);
})

btnPrev.addEventListener('click', () => {
  transferPrev(imgArr);
})

//slider
// const wrapper = document.querySelector('.slider__img-wrapper'),
//     inner= document.querySelector('.slider__inner'),
//     slides= document.querySelectorAll('.slider__img'),
//     next= document.querySelector('.controls__button--next'),
//     prev= document.querySelector('.controls__button--prev'), 
//     dots= document.querySelectorAll('.list__button'),
//     current= document.querySelector('#current'), 
//     width = window.getComputedStyle(wrapper).width,
//     total= document.querySelector('#total');
// let index = 1; // будет определять наш текущий слайд
//     // offset = 0;
// let curSld = 1,
//     maxSld = slides.length,
//     len = slides.length-1;

// if(slides.length > 0) {
//     if(width === '1190px') {
//         total.textContent = len;    
//     } else {
//         total.textContent = slides.length;
//     }
// } else {
//     console.log('Error');
// }


// function dotFill (sld) {
//     dots.forEach((el, i) => {
//         if(i === sld) {
//             el.classList.add('list__button--current-dot');
//         } else if(el.classList.contains('list__button--current-dot')) {
//             el.classList.remove('list__button--current-dot');
//         }
//     })
// };

// function init() {
//     showSlds(0);
//     //dotFill(0);
// };

// wrapper.style.overflow = 'hidden';

// console.log(width);
// console.log(curSld);
// console.log(maxSld);


// function showSlds (sldNum) {
//     slides.forEach((s, i) => {
//         s.style.transform = `translateX(${(i - sldNum) * 100}%)`;
    
//         if(i === sldNum) s.classList.add('list__button--current-dot');
//         else {
//             s.classList.remove('list__button--current-dot');
//         }
//     })
// };


// function nextSld() {
//     if(curSld === 1) {
//         curSld === maxSld ? curSld = 0 : curSld++; 
//     } else {
//         if(width == '320px') {
//             curSld === maxSld + 4 ? curSld = 0 : curSld = 2 + curSld;

//         } else {
//             curSld === maxSld + 2 ? curSld = 0 : curSld = 2 + curSld;
//         }
//     }

//     if(width === '1190px') {
//         if(index == len) {
//             index = 1;
//         } else {
//             index++;
//         }
//     } else if(index == slides.length) {
//         index = 1;
//     } else {
//         index++;
//     }

    
//     current.textContent = index;

//     showSlds(curSld);
//     // dotFill(curSld);    
// };

// function prevSld() {
//     if(width == '320px') {
//         if(curSld == 1) {
//             curSld = maxSld + 4
//         } else {
//             curSld > 0 ? curSld = curSld - 2 : (curSld = maxSld + 4);
//             console.log('first');
//         }
//     } else {
//         curSld > 0 ? curSld = curSld - 2 : (curSld = maxSld + 2);
//         console.log('Error');
//     }

//     if(width === '1190px') {
//         if(index == 1) {
//             index = len;
//         } else {
//             index--;
//         }
//     } else if(index == 1) {
//         index = slides.length;
//     } else {
//         index--;
//     }


//     current.textContent = index;

//     showSlds(curSld);
//     // dotFill(curSld); 
// };

// next.addEventListener('click', nextSld);
// prev.addEventListener('click', prevSld);

// init();

