export function message (str){
    let Box=document.querySelector('.errorBox')
    let div=document.createElement('div')
    div.className='error scrollText_scl'
    div.innerHTML='<strong>ERROR:</strong>'+str;
    Box.append(div)
    setTimeout(()=>{div.classList.add('start')},10)
    setTimeout(()=>{div.classList.remove('start')},2300)
    setTimeout(()=>{div.remove()},3000)

}
