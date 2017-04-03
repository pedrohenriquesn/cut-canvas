import '../styles/default.css'
import '../styles/boxes.css'

const sayHello = require('./say');
const $ = require('jquery')

// sayHello('JS', document.querySelector('h2'));

$(document).ready(function(){
    $(".art-box img").mouseenter(function(){

        const largura = parseInt((this.width / 2) - 2)
        const altura = parseInt((this.height / 2) - 1)   
 
        $('.art-main-grid').toggle()
        const grid = $('.art-main-grid .art-grid')
        // debugger
        $(grid).css('height', altura+'px')
        $(grid).css('width', largura+'px')

    });
    $(".art-box").mouseleave(function(){
        $('.art-main-grid').toggle()
    });
});
