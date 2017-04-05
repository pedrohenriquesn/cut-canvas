import '../styles/default.css'
import '../styles/boxes.css'

const mouseDown = require('./mouseDown');
const mouseMove = require('./mouseMove');
const $ = require('jquery')

$(document).ready(function(){

    $(".art-box, .box-size").mousedown(function(event){ mouseDown() });
    $(".art-box, .box-size").mousemove(function(event){ mouseMove() });
    $(".art-box, .box-size").mouseup(function(event){
        sessionStorage.setItem('dragMouse', false)
    });

    $(".btn-fake-cut").click(function(event){
        $('.box-size').css('border-color', '#FFF')
        $('.sizeX').css('background-color', 'rgba(0, 0, 0, 0)')
        $('.sizeY').css('background-color', 'rgba(0, 0, 0, 0)')
    });


});
