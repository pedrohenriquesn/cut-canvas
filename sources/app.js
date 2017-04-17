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
        $('.svg-tracejado').css('display', 'none')
    });

    // $(function() {
        setTimeout(function(){ 
            
            let imagem = $('.art-image')[0]
            let altura = (imagem.height - 300)
            let largura = (imagem.width - 300)
            
            $('.box-size').css('border-right-width', ''+(largura/2)+'px')
            $('.box-size').css('border-left-width', ''+(largura/2)+'px')
            $('.box-size').css('border-top-width', ''+(altura/2)+'px')
            $('.box-size').css('border-bottom-width', ''+(altura/2)+'px')

        }, 100);

        // $( "#art-image-img" ).onload = function() {
        //     debugger
        // }

        // $( "#art-image-img" ).on('load', function() {
        //     debugger
        // });

    // });

    window.addEventListener('load', function(){
        debugger
    }, false)

});
