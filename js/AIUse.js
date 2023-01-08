import {change_Src, srcContact, srcContact1, svgSrc} from "./changeSrc.js";
import {arrScrollAni, itemScrollAni} from "./animate_scroll.js";
import {arrLink} from "./animate_drag.js";
import {guideHide} from "./guide.js";

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
    guideHide(menuHover)
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
        menuHover.firstElementChild.classList.remove('start')
    }
    let main=document.getElementById('main')
    let arrIntro=document.querySelectorAll('#main>div')
    let maxZ=arrIntro.length;
    let InW=arrIntro[0].clientWidth
    let ToWidth= main.clientWidth -InW; 
    let body=document.getElementById('body')
    let introText=document.querySelectorAll('#main>div>div')
    introText.forEach((item)=>{
        item.classList.add('start')
    })
    arrIntro.forEach((item)=>{
        item.style.left=`${ToWidth/2}px`;
    })
    body.onselectstart=function (){return false;}

    function time1(z){
        return Math.pow(z,2);
    }
    
    function linkDraw(arr,i,num,progress,width,mul,line){
        let flag=1;
        if(num===0){
            let sty=getComputedStyle(arr[i-1])
            let styItem=getComputedStyle(arr[i])
                arr[i].style.left=`${parseFloat(arr[i-1].style.left)+width/2}px`
                arr[i].style.transform=`matrix(${0.8*mul+0.2*(1-progress)}, 0, 0,${0.8*mul+0.2*(1-progress)}, 0, 0)`
                arr[i].style.opacity=`${0.04*mul+0.2*(1-progress)}`
                arr[i].style.zIndex=`1`
        }
        if(num===1){
            let styItem=getComputedStyle(arr[i])
            let sty=getComputedStyle(arr[i+1])
                arr[i].style.left=`${parseFloat(arr[i+1].style.left)-width/2}px`
                arr[i].style.opacity=`${0.04*mul+0.2*progress}`
                arr[i].style.transform=`matrix(${0.8*mul+0.2*progress}, 0, 0,${0.8*mul+0.2*progress}, 0, 0)`
                arr[i].style.zIndex=`1`
        }
    }
    function zhanKai(){
        arrIntro.forEach((item)=>{
            item.style.transitionProperty=`all`
            item.style.transitionDuration=`1s`
        })
        this.style.backgroundColor=`rgb(163, 207, 205)`
        this.style.left=`${ToWidth/2}px`
        this.style.transform=`matrix(1, 0, 0, 1, 0, 0)`
        this.style.opacity='1';
        let introBox_div=this.querySelectorAll('div')
        for(let item of introBox_div)
            item.classList.add(`start`)
        let introP=this.querySelectorAll('p');
        for(let item of introP)
            item.classList.add('start')

        arrLink(arrIntro,this.dataset.w,maxZ,{draw:linkDraw,progress:0.5,width:InW/2,mulFactor:0.9,linFactor:0.2})
    }

    let selfEvent=new Event('new1')
    arrIntro[0].addEventListener('new1',zhanKai)
    let controlBox=document.getElementById('onlyOne');
    controlBox.onpointerdown=function (){
        arrIntro[0].dispatchEvent(selfEvent);
        this.classList.remove('start');
    }
    let change=document.getElementById('change');
    change.onpointermove=function (event){
        if(event.target.closest('li')){
            let Li=event.target.closest('li')
            Li.onpointerdown=function (){
                for(let item of arrIntro)
                    if(item.dataset.w === Li.dataset.w){
                        item.addEventListener('new1',zhanKai)
                        item.dispatchEvent(selfEvent)
                        controlBox.classList.remove('start');
                    }

            }
        }
    }
    document.onpointermove=function (event1){
        if(event1.target.closest('.intro')){
            let introBox=event1.target.closest('.intro');
            introBox.ondragstart=function (){return false;}
            introBox.onselectstart=function (){return false;}
            introBox.onpointerenter=function (){
                introBox.style.opacity='1';
                let introBox_div=introBox.querySelectorAll('div')
                for(let item of introBox_div)
                    item.classList.add(`start`)
                let introP=introBox.querySelectorAll('p');
                for(let item of introP)
                    item.classList.add('start')
            }
            introBox.onpointerleave=function (){
                introBox.style.opacity='0.3';
                introBox.style.backgroundColor=`rgb(163, 207, 205,0.4)`
                let introBox_div=introBox.querySelectorAll('div')
                 for(let item of introBox_div)
                    item.classList.remove(`start`)
                let introP=introBox.querySelectorAll('p');
                for(let item of introP)
                    item.classList.remove('start')
                introBox.style.zIndex='1'
            }
            let flag=0;
            
            function n1 (){
                arrIntro.forEach((item)=>{
                    item.style.transitionProperty=`all`
                    item.style.transitionDuration=`1s`
                })
                introBox.style.backgroundColor=`rgb(163, 207, 205)`
                introBox.style.left=`${ToWidth/2}px`
                introBox.style.transform=`matrix(1, 0, 0, 1, 0, 0)`
                arrLink(arrIntro,introBox.dataset.w,maxZ,{draw:linkDraw,progress:0.5,width:InW/2,mulFactor:0.9,linFactor:0.2})
                main.addEventListener('transitionend',(event)=>{
                    if(event.target.closest('.intro') && flag===1)
                    {
                        let eve=event.target.closest('.intro')
                        eve.style.transitionProperty=`top,background-color,box-shadow`
                        eve.style.transitionDuration=`0.5s`
                        eve.style.transitionDelay='0.1s'
                    }
                })
            }
            let selfEvent=new Event('new2')
            introBox.addEventListener('new2',n1)
            introBox.onpointerdown=function (event2) {
                controlBox.classList.remove('start');
                flag=1;
                introBox.onpointerleave=null;
                introBox.setPointerCapture(event2.pointerId)
                introBox.style.position = 'absolute'
                introBox.style.zIndex=`99`
                let areaSitX = main.getBoundingClientRect().left + document.documentElement.scrollLeft;
                let width = main.clientWidth - introBox.clientWidth
                let itemOffX = event2.offsetX;
                function mouseDrag(eve) {
                    introBox.removeEventListener('new1',n1)
                    arrIntro.forEach((item)=>{
                        if(item.dataset.w!==introBox.dataset.w){
                        item.style.transitionProperty=`top,background-color,box-shadow`
                        item.style.transitionDuration=`0.5s`
                        }
                    })
                    let X = eve.pageX - itemOffX - areaSitX
                    if (X < 0) X = 0
                    if (X > width) X = width
                    let progressMid =X/(width/2)<=1?X/(width/2):2-X/(width/2)
                    let progressNormal =X/width
                    let zMid = time1(progressMid)
                    let zNormal = time1(progressNormal)
                    let styItem=getComputedStyle(introBox)
                     introBox.style.left = X + 'px';
                    if(parseFloat(styItem.left)>=1*ToWidth/4 && parseFloat(styItem.left)<=3*ToWidth/4)
                    {
                        introBox.style.zIndex=`99`
                        introBox.style.backgroundColor=`rgb(163, 207, 205)`
                        introBox.style.opacity=`1`;
                        introBox.style.transitionProperty=`opacity,transform,top,background-color,box-shadow`
                        introBox.style.transitionDuration='0.8s'
                        introBox.style.transitionDelay='16ms'
                        introBox.style.transform=`matrix(1, 0, 0, 1, 0, 0)`
                    }
                    else {
                        introBox.style.zIndex=`1`
                        introBox.style.opacity=`0.5`
                        introBox.style.backgroundColor = `rgb(163, 207, 205,0.4)`
                        introBox.style.transform=`matrix(0.8, 0, 0, 0.8, 0, 0)`
                    }
                     arrLink(arrIntro,introBox.dataset.w,maxZ,{draw:linkDraw,progress:zNormal,width:InW/2,mulFactor:0.9,linFactor:0.2})
                   
                    
                }
                // mouseDrag(event2);
                document.addEventListener('pointermove', mouseDrag)
                introBox.dispatchEvent(selfEvent)
                introBox.onpointerup = function () {
                    flag=0;
                    document.removeEventListener('pointermove', mouseDrag)
                    introBox.onpointerup=null;
                }
                
                }
            }
     
        
        
    }
    }

