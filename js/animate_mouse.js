import {animate} from "./animate.js";

export function mouseImgMove(elem,event,num,n){
    let sitX=event.clientX/+num;
    let sitY=event.clientY/+num;
    elem.style.backgroundPositionX=`${n-sitX*2}%`
    elem.style.backgroundPositionY=`${n-sitY*4}%`
}
export function SBzz(e, num, evenTig) {
    let sitX = e.offsetX;
    let sitY = e.offsetY;
    function draw(p) {
        if (num)
            evenTig.style.clipPath = `circle(${150 * p}% at ${sitX}px ${sitY}px)`;
        else
            evenTig.style.clipPath = `circle(${150 * (1 - p)}% at ${sitX}px ${sitY}px)`;
    }
    animate({
        duration: 1500,
        timing: function (a) { return Math.pow(a,0.2); },
        draw: draw,
        bo: true
    })}