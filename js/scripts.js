// Script para el background-image de la página principal, creado para que cada vez que se refresque la página salga una imágen nueva.

window.onload = function bgimage () {
    var images = ['css/principalb1.png', 'css/principalb2.png', 'css/principalb3.png'];
    var image = images[Math.floor(Math.random() * images.length)];
    document.getElementsByTagName('body')[0].style.backgroundImage = "linear-gradient(rgba(15, 13, 13, 0.8), rgba(15, 13, 13, 0.4)), url('" + image + "')";
    document.getElementsByTagName('body')[0].style.backgroundRepeat = "no-repeat";
    document.getElementsByTagName('body')[0].style.backgroundSize = "cover";
    document.getElementsByTagName('body')[0].style.backgroundAttachment= "fixed";
    document.getElementsByTagName('body')[0].style.backgroundPosition = "center";   
}