import {change_Src, srcContact, srcContact1, svgSrc} from "./changeSrc.js";
import {arrScrollAni, itemScrollAni} from "./animate_scroll.js";
import { drag} from "./animate_drag.js";
window.onload=function (){
    let logo=document.getElementById('logo')
    let svgScroll=document.querySelectorAll('.svgBox img')
    let svgTable=document.getElementById('svgTable')
    let menuHover=document.getElementById('menuHover')
        svgScroll.forEach((item) => {item.classList.add('start')})
        logo.classList.add('start');
    svgTable.onmousemove=function (event){svgSrc(event,menuHover)}
    let socialBox=document.getElementById('socialBox');
    socialBox.onmousemove=function (event){
        if(event.target.tagName==='IMG'){
            change_Src(srcContact1,event.target,+event.target.dataset.name)
        }
        event.target.onmouseleave=function (){
            change_Src(srcContact,event.target,+event.target.dataset.name)
        }
    }
    let social=document.querySelector('.footerContact .scrollBox_marginTop')
    let logo1=document.getElementById('logo1')
    let informBox=document.querySelectorAll('.informBox .scrollText_scl')
    window.onscroll=function (){
        itemScrollAni(social);
        itemScrollAni(logo1);
        arrScrollAni(informBox);
    }
    menuHover.onmouseleave=function (){
        menuHover.classList.remove('open')
    }
    let main=document.getElementById('main')
    let arrIntro=document.querySelectorAll('#main div')
    let maxZ=arrIntro.length;
    function time1(z){
        return Math.pow(z,2);
    }
    function draw1(z,item,i,bai){
        // if(item.previousElementSibling) {
        //     let itemStyle = getComputedStyle(item.previousElementSibling)
        //     let left=parseFloat(itemStyle.left)
        //     console.log(item.previousElementSibling.id+':'+itemStyle.left)
        //     item.previousElementSibling.style.left=`${left-100}px`
        // }
        item.style.translate=`0 ${-12*z}%`
        item.style.opacity=`${z+0.3*bai}`
        item.style.top=`${150*i}px`
    }
    document.onpointermove=function (event1){
        if(event1.target.closest('.intro')){
            let introBox=event1.target.closest('.intro');
            introBox.ondragstart=function (){return false;}
            introBox.onpointerdown=function (event2){
                drag(event2,main,introBox,{time:time1,draw:draw1,bool:true});
                document.addEventListener('pointermove',function (){
                for(let i=+introBox.dataset.w+1;i<maxZ;i++){
                    arrIntro[i].style.left=`${parseFloat(arrIntro[i-1].style.left)+50}px`
                }
                for(let i=+introBox.dataset.w-1;i>=1;i--){
                    arrIntro[i].style.left=`${parseFloat(arrIntro[i+1].style.left)-50}px`
                }
                
                })
            }
        }
    }
}
