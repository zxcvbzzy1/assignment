import {animate} from './animate.js'
   export function scroll_top(eve,time,dur,num){
   let toTop=eve.getBoundingClientRect().top-num;
   if(toTop<=10 && toTop>=-10) return;
   let totalTop=document.documentElement.scrollTop;
   function draw(z){
       document.documentElement.scrollTop=+totalTop+toTop*z;
   }
   if(time===0) time=function(progress){return +Math.pow(progress,2)}
       animate({
       duration:dur,
       timing:time,
       draw:draw,
       bo:true,
   });
}
    let client=document.documentElement.clientHeight;
    export function scrollSit(event){
    let top=event?.getBoundingClientRect().top;
    let bottom=client-top;
    if(top>=-20 && bottom>=0) return true;
    return false;
    }

    export function arrScrollAni(arr){
        if(scrollSit(arr[0]))
            arr.forEach((item) => {item.classList.add('start')})
        else
            arr.forEach((item) => {item.classList.remove('start')})
    }

    export function arrEachScrollAni(arr) {
        arr.forEach((item)=>{
            if(scrollSit(item)) item.classList.add('start');
            else item.classList.remove('start');
        })
    }
    export function itemScrollAni(item){
        if(scrollSit(item)) item.classList.add('start');
        else item.classList.remove('start');
    }

