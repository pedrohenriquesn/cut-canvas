import '../styles/default.css'
import '../styles/boxes.css'

const say = require('./say');
const $ = require('jquery')

$(document).ready(function(){

    sessionStorage.setItem('dragMouse', false)
    sessionStorage.setItem('arestaClick', false)

    $(".art-box, .box-size").mousedown(function(event){
        sessionStorage.setItem('dragMouse', true)
        sessionStorage.setItem('initClientX', event.clientX)
        sessionStorage.setItem('initClientY', event.clientY)

        sessionStorage.setItem('arestaClick', event.target.classList[1])
        sessionStorage.setItem('currentSizeRight', parseInt($('.box-size').css('width')))
        sessionStorage.setItem('currentSizeHeight', parseInt($('.box-size').css('height')))
        sessionStorage.setItem('currentBorderTop', parseInt($('.box-size').css('border-top')))
        sessionStorage.setItem('currentBorderLeft', parseInt($('.box-size').css('border-left')))


        sessionStorage.setItem('currentBorderBottom', parseInt($('.box-size').css('border-bottom')))
        sessionStorage.setItem('currentBorderRight', parseInt($('.box-size').css('border-right')))



    });
    $(".art-box, .box-size").mousemove(function(event){
        if ( sessionStorage.getItem('dragMouse') == 'true') {
            // let box = $('.art-image')[0]
            
            let initX = sessionStorage.getItem('initClientX')
            let initY = sessionStorage.getItem('initClientY')

            let currentX = event.clientX
            let currentY = event.clientY

            let diffX = -(initX - currentX)
            let diffY = -(initY - currentY)

            if (sessionStorage.getItem('arestaClick') == "re-top") {

                let current = parseInt(sessionStorage.getItem('currentBorderTop'))
                let valorTop = (current+diffY)
                $('.box-size').css('border-top', ''+valorTop+'px solid rgba(0, 151, 255, 0.5)')

                let currentBottom = parseInt(sessionStorage.getItem('currentBorderBottom'))
                let newBorderBottom = (currentBottom - diffY)
                $('.box-size').css('border-bottom', ''+newBorderBottom+'px solid rgba(0, 151, 255, 0.5)')
            }
            if (sessionStorage.getItem('arestaClick') == "re-left") {

                let current = parseInt(sessionStorage.getItem('currentBorderLeft'))
                let valor = (current+diffX)
                $('.box-size').css('border-left', ''+valor+'px solid rgba(0, 151, 255, 0.5)')

                let currentRight = parseInt(sessionStorage.getItem('currentBorderRight'))
                let newBorderRight = (currentRight - diffX)
                $('.box-size').css('border-right', ''+newBorderRight+'px solid rgba(0, 151, 255, 0.5)')
            }
            if (sessionStorage.getItem('arestaClick') == "re-right") {                

                let current = parseInt(sessionStorage.getItem('currentSizeRight'))
                let valor = (current+diffX)
                $('.box-size').css('width', ''+valor+'px')

                let currentRight = parseInt(sessionStorage.getItem('currentBorderRight'))
                let newBorderRight = (currentRight - diffX)
                $('.box-size').css('border-right', ''+newBorderRight+'px solid rgba(0, 151, 255, 0.5)')

            }
            if (sessionStorage.getItem('arestaClick') == "re-bottom") {                

                let current = parseInt(sessionStorage.getItem('currentSizeHeight'))
                let valor = (current+diffY)
                $('.box-size').css('height', ''+valor+'px')

                let currentBottom = parseInt(sessionStorage.getItem('currentBorderBottom'))
                let newBorderBottom = (currentBottom - diffY)
                $('.box-size').css('border-bottom', ''+newBorderBottom+'px solid rgba(0, 151, 255, 0.5)')

            }
        }
    });
    $(".art-box, .box-size").mouseup(function(event){
        sessionStorage.setItem('dragMouse', false)
        sessionStorage.setItem('arestaClick', false)
    });

});
