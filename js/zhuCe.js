import {svgSrc} from "./changeSrc.js";
import {mouseImgMove,SBzz} from "./animate_mouse.js";
import {message} from "./message.js";
import * as reg from "./reg.js";
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
    
    let active=document.activeElement
    register.addEventListener('focus',function (){
        active=document.activeElement
        },true)
    register.addEventListener('blur',function (){
        active.onblur=function (){
            if(reg.reg_sql.test(this.value)){message('含有未知字符(仅支持空格,_,汉字)')}
            if(active.id==='r3'||active.id==='r2')
                if(reg.reg_pass.test(this.value))message('密码只能包含数字与大小写字母')
            if(active.id==='r3')
                if(arrRe[1].value!==arrRe[2].value) message("密码不一致")
        }
        },true)
    let security=document.getElementById('security')
    arrRe[1].onfocus=function (){
            security.style.display='block'
    }
    arrRe[1].addEventListener('input',function (){
        let n1,n2,n3,sum;
        let length=this.value.length;
        n1=n2=n3=sum=0
        if(reg.reg_pass1.test(this.value)) n1=1;
        if(reg.reg_pass2.test(this.value)) n2=1;
        if(reg.reg_pass3.test(this.value)) n3=1;
        sum=n1+n2+n3;
        if(length<=4) {security.innerHTML='安全等级：弱(太短）';return;}
        if(sum===1) security.innerHTML='安全等级：弱';
        if(sum===2) security.innerHTML='安全等级：中';
        if(sum===3) security.innerHTML='安全等级：强';
        if(n1===0) security.innerHTML+='<br><strong>建议包含数字</strong>'
        if(n2===0) security.innerHTML+='<br><strong>建议包含小写字母</strong>'
        if(n3===0) security.innerHTML+='<br><strong>建议包含大写字母</strong>'
    })
    registerForm.onsubmit=function (){
            let bool=true;
            arrRe.forEach((item)=>{
                if (reg.reg_sql.test(item.value)){
                    message('含有未知字符(仅支持空格,_,汉字)');
                    bool=false
                }
            })
            if(reg.reg_pass.test(arrRe[1].value) || reg.reg_pass.test(arrRe[2].value))
            {
                message('密码只能包含数字英文大小写');bool=false;
            }
            if(arrRe[1].value!==arrRe[2].value){
                message("密码不一致")
                bool=false;
            }
        return bool;
        }

    let loginForm=document.getElementById('loginForm')
    login.addEventListener('focus',function (){
        active=document.activeElement
    },true)
    login.addEventListener('blur',function (){
        active.onblur=function (){
            if(reg.reg_sql.test(this.value)){message('含有未知字符(仅支持空格,_,汉字)')}
            if(active.id==='l2')
                if(reg.reg_pass.test(this.value))message('密码只能包含数字与大小写字母')
        }
    },true)

    loginForm.onsubmit=function (){
        let bool=true;
        arrLo.forEach((item)=>{
            if (reg.reg_sql.test(item.value)){
                message('含有未知字符(仅支持空格,_,汉字)');
                bool=false
            }
        })
        if(reg.reg_pass.test(arrLo[1].value))
        {
            message('密码只能包含数字英文大小写');bool=false;
        }
        return bool;
    }
}