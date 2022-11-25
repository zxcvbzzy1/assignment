import {svgSrc} from "./changeSrc.js";
import {mouseImgMove,SBzz} from "./animate_mouse.js";
window.onload=function (){
    let logo=document.getElementById('logo')
    let svgScroll=document.querySelectorAll('.svgBox img')
    let userBox=document.getElementById('userBox')
    userBox.classList.add('start')
    svgScroll.forEach((item) => {item.classList.add('start')})
    logo.classList.add('start');
    let svgTable=document.getElementById('svgTable')
    let menuHover=document.getElementById('menuHover')
    let body=document.getElementById('body')
    let title=document.getElementById('title')
    svgTable.onmousemove=function (event){
        svgSrc(event,menuHover)
    }
    body.onmousemove=function (event){
        mouseImgMove(body,event,90,50);
        mouseImgMove(title,event,90,60);
    }
    let userHover=document.getElementById('userHover')
    userBox.onmouseenter=function (event){
        SBzz(event,1,userHover)}
    userBox.onmouseleave=function (event){
        SBzz(event,0,userHover)}
    let boxChange=document.getElementById('boxChange')
    let login=document.getElementById('login')
    let register=document.getElementById('register')
    let svgText=document.getElementById('svgText')
    let str=['登入','注册']
    let arrRe=register.querySelectorAll('input')
    let arrLo=login.querySelectorAll('input')
    let n=1,i=0;
        boxChange.onclick=function (){
        if(n===2)n=0;
        if(i===2)i=0;
        login.classList.toggle('start')
        register.classList.toggle('start')
        arrLo[0].disabled=!arrLo[0].disabled
        arrLo[1].disabled=!arrLo[1].disabled
        arrRe[0].disabled=!arrRe[0].disabled
        arrRe[1].disabled=!arrRe[1].disabled
        arrRe[2].disabled=!arrRe[2].disabled
        boxChange.children[0].innerHTML=`转至${str[i++]}`
        svgText.innerHTML=str[n++]
    }
    let registerForm=document.getElementById('registerForm')
    registerForm.onsubmit=function (){
            if(arrRe[2].value==='' || arrRe[1].value===''){
                alert("密码为空");return false;
            }
            if(arrRe[1].value!==arrRe[2].value){
                alert("密码不一致");return false;
            }}



}