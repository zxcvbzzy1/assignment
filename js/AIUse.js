import {change_Src, srcContact, srcContact1, svgSrc} from "./changeSrc.js";
import {arrScrollAni, itemScrollAni} from "./animate_scroll.js";
import {arrLink} from "./animate_drag.js";

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
    let InW=arrIntro[0].clientWidth
    function time1(z){
        return Math.pow(z,2);
    }
    
    function linkDraw(arr,i,num,progress,width,mul,line){
        if(num===0){
            let sty=getComputedStyle(arr[i-1])
            // arr[i].style.zIndex=`${sty.zIndex-1}`
            arr[i].style.left=`${parseFloat(arr[i-1].style.left)+width/2}px`
            console.log(sty.transform)
            requestAnimationFrame(()=>{
            })
        }
        if(num===1){
            let sty=getComputedStyle(arr[i+1])
            // arr[i].style.zIndex=`${sty.zIndex-1}`
            arr[i].style.left=`${parseFloat(arr[i+1].style.left)-width/2}px`
            requestAnimationFrame(()=>{
                arr[i].style.transform=`matrix(${0.8*mul+0.2*progress}, 0, 0,${0.8*mul+0.2*progress}, 0, 0)`
            })

        }
    }
    function zChange(arr,i,num,w,width){
        if(num===0){
            let sty=getComputedStyle(arr[i-1])
            arr[i].style.zIndex=`${sty.zIndex-1}`
        }
        if(num===1){
            let sty=getComputedStyle(arr[i+1])
            arr[i].style.zIndex=`${sty.zIndex-1}`
        }
    }
    document.onpointermove=function (event1){
        if(event1.target.closest('.intro')){
            let introBox=event1.target.closest('.intro');
            introBox.ondragstart=function (){return false;}
            introBox.onselectstart=function (){return false;}
            introBox.onpointerenter=function (){
                introBox.style.backgroundColor=`rgb(255,255,255)`
                introBox.style.opacity='1';
                introBox.style.top='150px'
                introBox.style.zIndex='99'
                introBox.style.transform=`scale(1.1,1.1)`
            }
            introBox.onpointerleave=function (){
                introBox.style.transform=`scale(1,1)`
                introBox.style.opacity='0.3';
                introBox.style.backgroundColor=`rgb(255,255,255,0.4)`
                introBox.style.top='200px'
                introBox.style.zIndex='1'
            }
            introBox.onpointerdown=function (event2) {
                introBox.style.backgroundColor=`rgb(255,255,255)`
                introBox.setPointerCapture(event2.pointerId)
                introBox.style.position = 'absolute'
                let areaSitX = main.getBoundingClientRect().left + document.documentElement.scrollLeft;
                let width = main.clientWidth - introBox.clientWidth
                let itemOffX = event2.offsetX;
                introBox.style.zIndex=`99`
                introBox.style.top='115px'
                function mouseDrag(eve) {
                    let X = eve.pageX - itemOffX - areaSitX
                    if (X < 0) X = 0
                    if (X > width) X = width
                    let progressMid =X/(width/2)<=1?X/(width/2):2-X/(width/2)
                    let progressNormal =X/width
                    let zMid = time1(progressMid)
                    let zNormal = time1(progressNormal)
                    introBox.style.left = X + 'px';
                   arrLink(arrIntro,introBox.dataset.w,maxZ,{draw:linkDraw,progress:zNormal,width:InW/2,mulFactor:0.9,linFactor:0.2})
                }
                mouseDrag(event2);
                document.addEventListener('pointermove', mouseDrag)
                introBox.onpointerup = function () {
                    document.removeEventListener('pointermove', mouseDrag)
                    introBox.style.zIndex=`1`;
                    introBox.style.top='200px'
                    introBox.onpointerup=null;
                }

                }

            }
        }
    }

