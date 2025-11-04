let stars = document.getElementsByClassName('stars')
let moon = document.getElementsByClassName('moon')
let mountain3 = document.getElementsByClassName('mountain3')
let mountain4 = document.getElementsByClassName('mountain4')
let river = document.getElementsByClassName('river')
let boat = document.getElementsByClassName('boat')
let mountain7 = document.getElementsByClassName('mountain7')
let nouvel = document.querySelector('.nouvel')
window.onscroll = function(){
    let value = scrollY;
    stars.style .left = value + 'px'
}