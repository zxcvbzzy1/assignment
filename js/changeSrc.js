export let srcContent=["images/svg/search-line1.svg",
        "images/svg/user1.svg",
        "images/svg/home 11-fill.svg",
        "images/svg/menu1.svg",]
export let srcContent1=["images/svg/search-line.svg",'images/svg/user.svg',
        'images/svg/home%201-fill.svg','images/svg/menu.svg',]
export let srcContact=[
    'images/svg/wechat.svg','images/svg/QQ.svg',
    'images/svg/QQ空间black.svg','images/svg/bilibili.svg',
    'images/svg/朋友圈.svg',
]
export let srcContact1=[
    'images/svg/wechat1.svg','images/svg/QQ1.svg',
    'images/svg/QQ空间.svg','images/svg/bilibili1.svg',
    'images/svg/朋友圈1.svg'
]
export function change_Src(arr,eve,index){
        eve.src=arr[index];
}
export function svgSrc (event,menuHover){
    if(event.target.closest('td'))
    {
        change_Src(srcContent,event.target,+event.target.dataset.name)
        event.target.onclick=function (){
            if(event.target.dataset.name==='3')
            {
                menuHover.classList.toggle('open');
                menuHover.firstElementChild.classList.add('start')
            }
        }
        event.target.onmouseleave=function (){
            change_Src(srcContent1,event.target,+event.target.dataset.name)
        }}}