const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');
const mainBar = document.querySelector('.main-slide');
const slideCount = sideBar.querySelectorAll('div').length;
const conteiner = document.querySelector('.container');
let activeSlide = 0;

sideBar.style.top = `-${(slideCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));



function changeSlide(direct){
    if(direct == 'up'){
        activeSlide++;

        if(activeSlide == slideCount){
            activeSlide = 0;
        }
    }
    else{
        activeSlide--;

        if(activeSlide < 0){
            activeSlide = slideCount - 1;
        }
    }

    const height = conteiner.clientHeight;

    sideBar.style.transform = `translateY(${activeSlide * height}px)`;
    mainBar.style.transform = `translateY(-${activeSlide * height}px)`;
}