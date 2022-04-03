const mainContainer = document.getElementById('mainContainer');
const container = document.getElementById('container');
const slider = document.getElementById('slider');
const content = document.querySelectorAll('.content');
const box = document.querySelectorAll('.box');
const next = document.getElementById('next');
const prev = document.getElementById('prev');


let i = 0;
let width = container.clientWidth;
let height = container.style.height;
let count = slider.childElementCount;

content.forEach(element => {
    element.style.width = `${width}px`;
});
console.log(content.clientWidth)

next.style.height = `${height}px`;
prev.style.height = `${height}px`;
mainContainer.style.height = `${height}px`;
mainContainer.style.height = `${height}px`;

console.log(count)
console.log(i)

const goNext = () => {

    if (i < count - 1) {
        i++;
        slider.style.transform = `translateX(-${width * i}px)`;
        nextArrow.style.color = "blue";
        prevArrow.style.color = "blue";
    } else {
        nextArrow.style.color = "grey";
        nextArrow.style.stroke = "none";
    }
}

next.addEventListener("click", goNext);

const goPrev = () => {
    if (i > 0) {
        i--;
        slider.style.transform = `translateX(-${width * i}px)`;
        prevArrow.style.color = "blue";
        nextArrow.style.color = "blue";
    } else {
        prevArrow.style.color = "grey";
        prevArrow.style.stroke = "none";
    }
}

const resizeCheck = () => {
    window.location.reload();
}

prev.addEventListener("click", goPrev);
window.addEventListener('resize', resizeCheck)