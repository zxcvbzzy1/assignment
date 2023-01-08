
export function guideHide(menuHover){
    menuHover.onpointerdown=function (event){
        if(event.target.closest('li')){
            let whatLi=event.target.closest('li');
            if(whatLi.className==='menuLi'){
                whatLi.children[1].hidden=!whatLi.children[1].hidden
            }
        }
    }
}