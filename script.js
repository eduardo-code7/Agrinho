var header = document.getElementById('header')
var nagivation_header = document.getElementById ('nagivation_header')
var content = document.getElementById('content')
var showSidebar = false
function clicar(){
    showSidebar = !showSidebar
    console.log(showSidebar)
   if(showSidebar){
    nagivation_header.style.marginLeft ='-65vw'
    nagivation_header.style.animationName = 'showSidebar'
    content.style.filter = 'blur(2px)'
   }else{
    nagivation_header.style.marginLeft='-1000vw'
    nagivation_header.style.animationName = ''
    content.style.filter = ''
   }
}   
function closee(){
    if(showSidebar){
        clicar() ;

    }
}
window.addEventListener('resize',function(event){
    if(window.innerWidth > 768 && showSidebar){
        clicar()
    }
   
})