/*const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed)
}

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen);
*/

const trafLight = document.querySelector('#trafLight');
const trafficLightTop = document.querySelector('.trafficLightTop');
const trafficLightCenter = document.querySelector('.trafficLightCenter');
const trafficLightBottom = document.querySelector('.trafficLightBottom');

function makeRed() {
    trafficLightTop.style.background = ('red');
    trafLight.removeEventListener('click', makeRed);
    trafficLightBottom.style.background = ('black');
    trafLight.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightCenter.style.background = ('yellow');
    trafLight.removeEventListener('click', makeYellow);
    trafficLightTop.style.background = ('black');
    trafLight.addEventListener('click', makeGreen);
}

function makeGreen() {
    trafficLightBottom.style.background = ('green');
    trafLight.removeEventListener('click', makeGreen);
    trafficLightCenter.style.background = ('black');
    trafLight.addEventListener('click', makeRed);
}

trafLight.addEventListener('click', makeRed);