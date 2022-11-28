import {animate} from './animate.js'
import {scroll_top} from "./animate_scroll.js";
import {svgSrc, srcContact, srcContact1,change_Src} from "./changeSrc.js";
import {arrScrollAni,itemScrollAni} from "./animate_scroll.js";

window.onload=function (){
    let str=`最先，有很多关于机器人的传说。如今，我们位于这些传说成为现实的临界点.
        当下世界所蕴含奇迹之多绝非远古先知的梦境所能构想，所拥有的灾祸之恐怖也非天启所能描绘，
        `
    let length=str.length;
    let HoverContent=document.getElementById('HoverContent');
    function type (z){
        let len=z*length;
        HoverContent.innerHTML=str.slice(0,Math.ceil(len));
    }
    animate ({
        duration:10000,
        timing:function(progress){
            return +Math.pow(progress,0.7)
        },
        draw:type,
        bo:true,
    })

    let scrollDown=document.getElementById('scrollDown');
    let body=document.getElementById('body');
    scrollDown.onclick=function (){
        let domHeight=document.documentElement.clientHeight;
        function scrollDownDraw(z){
            document.documentElement.scrollTop=domHeight*z
        }
        animate ({
            duration:1500,
            timing:function(progress){
                return +Math.pow(progress,2)
            },
            draw:scrollDownDraw,
            bo:true,
        })
        setTimeout(()=>{
            body.style.overflowY='scroll';
            scrollDown.style.display='none';
        },1500)
    }

    let f1,f2,f3,f11,f22,f33;
    let eve=document.querySelectorAll('.imgBox')
    function gradient1(z){
        eve[0].style.background=`linear-gradient(to right,rgb(255,255,255,${0.15*z}) ${z*15}%,rgb(0,0,0,0) ${40*z}%)`
        f1=z*15;f2=40*z;f3=0.15*z;
    }
    function gradient2(z){
        eve[0].style.background=`linear-gradient(to right,rgb(255,255,255,${(1-z)*f3}) ${(1-z)*f1}%,rgb(0,0,0,0) ${f2*(1-z)}%)`
    }
    eve[0].onmouseenter=function (){
        animate ({
            duration:700,
            timing:function(progress){
                return +Math.pow(progress,2)
            },
            draw:gradient1,
            bo:true,
        })}
    eve[0].onmouseleave=function (){
        animate ({
            duration:700,
            timing:function(progress){
                return +Math.pow(progress,2)
            },
            draw:gradient2,
            bo:true,
        })}
    function gradient11(z){
        eve[1].style.background=`linear-gradient(to left,rgb(191,191,191,${0.15*z}) ${z*15}%,rgb(0,0,0,0) ${40*z}%)`
        f11=z*15;f22=40*z;f33=0.15*z;
    }
    function gradient22(z){
        eve[1].style.background=`linear-gradient(to left,rgb(191,191,191,${(1-z)*f33}) ${(1-z)*f11}%,rgb(0,0,0,0) ${f22*(1-z)}%)`
    }
    eve[1].onmouseenter=function (){
        animate ({
            duration:700,
            timing:function(progress){
                return +Math.pow(progress,2)
            },
            draw:gradient11,
            bo:true,
        })}
    eve[1].onmouseleave=function (){
        animate ({
            duration:700,
            timing:function(progress){
                return +Math.pow(progress,2)
            },
            draw:gradient22,
            bo:true,
        })}
    let logo=document.getElementById('logo')
    logo.onclick=function () {
        scroll_top(logo.parentElement,0,1000,0);
    }

    let menuHover=document.getElementById('menuHover')
    let table=document.getElementById('table')
    table.onmousemove=function (event){
        svgSrc(event,menuHover)
    }
    let contact=document.getElementById('contact');
    contact.onclick=function (){
        contact.nextElementSibling.classList.toggle('conBox1')
    }
    HoverContent.parentElement.onmouseleave=function (){
        contact.nextElementSibling.classList.remove('conBox1')
    }
    let conBox1=document.getElementById('conBox1')
    conBox1.onmousemove=function (event){
        if(event.target.tagName==='DIV'){
            change_Src(srcContact1,event.target.children[0],+event.target.children[0].dataset.name)
        }
        event.target.onmouseleave=function (){
            change_Src(srcContact,event.target.children[0],+event.target.children[0].dataset.name)
        }
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
    let logo1=document.getElementById('logo1')
    logo1.onclick=function (){
        scroll_top(logo.parentElement,0,1000,0);
    }
    let scrollTextArr1=document.querySelectorAll('#imgBoxText1 span')
    let scrollTextArr2=document.querySelectorAll('#imgBoxText2 span')
    let informBox=document.querySelectorAll('.informBox .scrollText_scl')
    let social=document.querySelector('.footerContact .scrollBox_marginTop')
    let svgScroll=document.querySelectorAll('.svgBox .scrollText_scl')
    let ai1=document.getElementById('ai1')
    let ai2=document.getElementById('ai2')
    let h1=document.getElementById('h1')
    window.onscroll=function (){
        arrScrollAni(scrollTextArr1);
        arrScrollAni(scrollTextArr2);
        arrScrollAni(informBox);
        arrScrollAni(svgScroll);
        itemScrollAni(social);
        itemScrollAni(ai1);
        itemScrollAni(ai2);
        itemScrollAni(logo);
        itemScrollAni(logo1);
        itemScrollAni(h1)
    }
        itemScrollAni(h1)


}
