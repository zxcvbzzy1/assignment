import {change_Src, srcContact, srcContact1, svgSrc} from "./changeSrc.js";
import {arrScrollAni, itemScrollAni, arrEachScrollAni, scroll_top} from "./animate_scroll.js";
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
    let arrIntroBox=document.querySelectorAll('.main>div')
    let arrSvgBox=document.querySelectorAll('.svgBox.arrDown img')
    let posit=document.getElementById('posit')
    let arrP=document.querySelectorAll('#introBox1 p')
    let arrP2=document.querySelectorAll('#introBox2 p')
    let arrP3=document.querySelectorAll('#introBox3 p')
    let arrSnow=document.querySelectorAll('#introBox3 .snow.scrollImg_bounce')
    let arrP4=document.querySelectorAll('#introBox4 p')
    let arrP5=document.querySelectorAll('#introBox5 p')
    let arrP6=document.querySelectorAll('#introBox6 p')
    let arrImg=document.querySelectorAll('#introBox6 .ii.scrollImg_bounce')
    let arr7=document.querySelectorAll('#introBox7 p')
    arrP.forEach((item)=>{
         item.classList.add('start');})
    posit.classList.add('start')
    arrIntroBox[0].classList.add('start')
    window.onscroll=function (){
        itemScrollAni(social);
        itemScrollAni(logo1);
        arrScrollAni(informBox);
        arrEachScrollAni(arrIntroBox);
        arrEachScrollAni(arrSvgBox);
        arrEachScrollAni(arrP);
        arrEachScrollAni(arrP2);
        arrEachScrollAni(arrP3);
        arrEachScrollAni(arrSnow);
        arrEachScrollAni(arrP4);
        arrEachScrollAni(arrP5);
        arrEachScrollAni(arrP6);
        arrEachScrollAni(arrImg);
        arrEachScrollAni(arr7);

    }
    let main=document.getElementById('main')
    main.onmousemove=function (event){
        if(event.target.closest('.svgBox.arrDown')) {
            let chuFa=event.target.closest('.svgBox.arrDown');
            chuFa.onclick=function (){
            scroll_top(event.target.closest('.introBox.scrollText_scl.start').nextElementSibling,0,1000,150)
            }}
        if(event.target.closest('.svgBox.arrUp')) {
            let chuFa=event.target.closest('.svgBox.arrUp');
            chuFa.onclick=function (){
            scroll_top(event.target.closest('.introBox.scrollText_scl.start').previousElementSibling,0,1000,150)
            }}
        
        
    }
}
