function mostraMenu(){
    var menu = document.querySelector('.menu')
    if(menu.classList.contains('esconde-menu')){
        menu.classList.remove('esconde-menu')
    }else{
        menu.classList.add('esconde-menu')
    }
}