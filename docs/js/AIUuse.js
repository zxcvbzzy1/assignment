import {change_Src, srcContact, srcContact1, svgSrc} from "./changeSrc.js";
import {arrScrollAni, itemScrollAni} from "./animate_scroll.js";
window.onload=function (){
    let logo=document.getElementById('logo')
    let svgScroll=document.querySelectorAll('.svgBox img')
    let svgTable=document.getElementById('svgTable')
    let menuHover=document.getElementById('menuHover')
        svgScroll.forEach((item) => {item.classList.add('start')})
        logo.classList.add('start');
    svgTable.onmousemove=function (event){
        svgSrc(event,menuHover)
        }
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


}
