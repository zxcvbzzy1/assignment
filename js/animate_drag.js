

export function drag(event,area,item,{time,draw,bool}){
    item.setPointerCapture(event.pointerId)
    item.style.position='absolute'
    let areaSitX=area.getBoundingClientRect().left+document.documentElement.scrollLeft;
    let width=area.clientWidth-item.clientWidth
    let itemOffX=event.offsetX;
    function mouseDrag (eve){
        let X=eve.pageX-itemOffX-areaSitX
        if(X<0) X=0
        if(X>width) X=width
        let progress=X/(width/2)<=1?X/(width/2):2-X/(width/2)
        let z=time(progress)
        let i=1
        let bai=1
        item.style.left=X+'px';

        draw(z,item,i,bai);
        if(bool){
            linkAni({drawN:draw,item:item.previousElementSibling,flag:0,factor:1,bai:1,z:z})
            linkAni({drawN:draw,item:item.nextElementSibling,flag:1,factor:1,bai:1,z:z})
        }

    }
    mouseDrag(event);
    document.addEventListener('pointermove',mouseDrag)
    item.onpointerup=function (){
        document.removeEventListener('pointermove',mouseDrag)

        item.onpointerup=null;
    }
}
//死亡递归，有能力者帮忙改一下
export function linkAni({drawN,item,flag,factor,bai,z}){
    if(!item) return;
    if(flag===0){
        factor=factor+0.5;
        bai*=0.9
        setTimeout(()=>{drawN(z,item,factor,bai)}
            ,300)
        linkAni({drawN:drawN,item:item.previousElementSibling,flag:0,factor:factor,bai:bai,z:z});
    }
    else {
        factor=factor+0.5;
        bai*=0.9
        setTimeout(()=>{drawN(z,item,factor,bai)}
            ,300)
        linkAni({drawN:drawN,item:item.nextElementSibling,flag:1,factor:factor,bai:bai,z:z});
    }
}
