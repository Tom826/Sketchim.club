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
const wrapper = document.querySelector('.slider__img-wrapper'),
    inner= document.querySelector('.slider__inner'),
    slides= document.querySelectorAll('.slider__img'),
    next= document.querySelector('.controls__button--next'),
    prev= document.querySelector('.controls__button--prev'), 
    dots= document.querySelectorAll('.list__button'),
    current= document.querySelector('#current'), 
    width = window.getComputedStyle(wrapper).width,
    total= document.querySelector('#total');
let index = 1; // будет определять наш текущий слайд
    // offset = 0;
let curSld = 1,
    maxSld = slides.length,
    len = slides.length-1;

if(slides.length > 0) {
    if(width === '1190px') {
        total.textContent = len;    
    } else {
        total.textContent = slides.length;
    }
} else {
    console.log('Error');
}


function dotFill (sld) {
    dots.forEach((el, i) => {
        if(i === sld) {
            el.classList.add('list__button--current-dot');
        } else if(el.classList.contains('list__button--current-dot')) {
            el.classList.remove('list__button--current-dot');
        }
    })
};

function init() {
    showSlds(0);
    //dotFill(0);
};

wrapper.style.overflow = 'hidden';

// console.log(width);
// console.log(curSld);


function showSlds (sldNum) {
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${(i - sldNum) * 100}%)`;
    
        if(i === sldNum) s.classList.add('list__button--current-dot');
        else {
            s.classList.remove('list__button--current-dot');
        }
    })
};


function nextSld() {
    if(curSld === 1) {
        curSld === maxSld ? curSld = 0 : curSld++; 
    } else {
        if(width == '320px') {
            curSld === maxSld + 4 ? curSld = 0 : curSld = 2 + curSld;

        } else {
            curSld === maxSld + 2 ? curSld = 0 : curSld = 2 + curSld;
        }
    }

    if(width === '1190px') {
        if(index == len) {
            index = 1;
        } else {
            index++;
        }
    } else if(index == slides.length) {
        index = 1;
    } else {
        index++;
    }

    
    current.textContent = index;

    showSlds(curSld);
    // dotFill(curSld);    
};

function prevSld() {
    if(width == '320px') {
        if(curSld == 1) {
            curSld = maxSld + 4
        } else {
            curSld > 0 ? curSld = curSld - 2 : (curSld = maxSld + 4);
            console.log('first');
        }
    } else {
        curSld > 0 ? curSld = curSld - 2 : (curSld = maxSld + 2);
        console.log('Error');
    }

    if(width === '1190px') {
        if(index == 1) {
            index = len;
        } else {
            index--;
        }
    } else if(index == 1) {
        index = slides.length;
    } else {
        index--;
    }


    current.textContent = index;

    showSlds(curSld);
    // dotFill(curSld); 
};

next.addEventListener('click', nextSld);
prev.addEventListener('click', prevSld);

// dots.forEach((el, i) => {
//     el.addEventListener('click', () => {
//         console.log('i '+i)
//         dotFill(i);
//         showSlds(i+1);
//     })
// });

init();


// if(onlyNums(width) > 300) {
//     console.log(slides.length/2)
//     //desk
//     if(slides.length > 0) {
//         total.textContent = slides.length/2;
//     } else {
//         console.log('Error');
//     }

//     slides.forEach(slds => {
//         slds.style.width = onlyNums(width);
//     })

//     // wrapper.style.border = '2px red solid';
// }


// if(slides.length > 0) {
//     total.textContent = slides.length;
// } else {
//     console.log('Error');
// }

// inner.style.width = slides.length * 100 + '%';

// wrapper.style.overflow = 'hidden';

// slides.forEach(slds => {
//     slds.style.width = onlyNums(width);
// })

// function onlyNums(num) {
//     return +num.slice(0, num.length - 5);
// }

// // console.log(onlyNums(width));

// next.addEventListener('click', () => {
//     if(offset == onlyNums(width) * (slides.length - 1)) {
//         offset = 0;
//     } else {
//         offset += onlyNums(width);
//     }

//     inner.style.transform = `translateX(-${offset}px)`;

//     if(index == slides.length) {
//         index = 1;
//     } else {
//         index++;
//     }
//     current.textContent = index;
// })

// prev.addEventListener('click', () => {
//     if(offset == 0) {
//         offset = onlyNums(width) * (slides.length -1);
//     } else {
//         offset -= onlyNums(width);
//     }

//     inner.style.transform = `translateX(-${offset}px)`;

//     if(index == 1) {
//         index = slides.length;
//     } else {
//         index--;
//     }
//     current.textContent = index;
// })

// showSlds(index);

// function showSlds(i) {
//     // проверка на начало-конец
//     if(i > slides.length) {
//         index = 1;
//     }
//     if(i < 1) {
//         index = slides.length;
//     }

//     slides.forEach(item => item.style.display = 'none');
//     slides[index-1].style.display = 'block';

//     if(slides.length) {
//         current.textContent = index;
//     } else {
//         console.log('Error');
//     }
// }

// function changeSld(n) {
//     showSlds(index += n);
// }


