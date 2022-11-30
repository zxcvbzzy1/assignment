export function drag(event,area,item,{time,draw}){
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
        item.style.left=X+'px';
        draw(z);
    }
    mouseDrag(event);
    document.addEventListener('pointermove',mouseDrag)
    item.onpointerup=function (){
        document.removeEventListener('pointermove',mouseDrag)

        item.onpointerup=null;
    }
}

export function arrLink(arr,flag,length,{draw,progress,width,mulFactor,linFactor}){
    let n1=1,n2=1,n3=1,n4=1
    for(let i=+flag+1;i<length;i++){
        n1=n1*mulFactor
        n2=n2+linFactor
        draw(arr,i,0,progress,width,n1,n2)
    }
    for(let i=+flag-1;i>=0;i--){
        n3=n3*mulFactor
        n4=n4+linFactor
        draw(arr,i,1,progress,width,n3,n4)
    }

}