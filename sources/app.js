import '../styles/default.css'
import '../styles/boxes.css'

const say = require('./say');
const $ = require('jquery')

$(document).ready(function(){

    sessionStorage.setItem('dragMouse', false)

    $(".art-box").mousedown(function(event){
        sessionStorage.setItem('dragMouse', true)
        sessionStorage.setItem('initClientX', event.clientX)
        sessionStorage.setItem('initClientY', event.clientY)

        let box = $('.art-face')[0]
        sessionStorage.setItem('tagY', parseInt(box.style.top))
        sessionStorage.setItem('tagX', parseInt(box.style.left))

    });
    $(".art-box").mousemove(function(event){
        if ( sessionStorage.getItem('dragMouse') == 'true') {
            let box = $('.art-face')[0]
            
            let initX = sessionStorage.getItem('initClientX')
            let initY = sessionStorage.getItem('initClientY')

            let currentX = event.clientX
            let currentY = event.clientY

            let diffX = (initX - currentX)
            let diffY = (initY - currentY)

            let tagY =  sessionStorage.getItem('tagY')
            let totalY = ( tagY - diffY )

            let tagX =  sessionStorage.getItem('tagX')
            let totalX = ( tagX - diffX )

            box.style.top = ''+ totalY +'px'
            box.style.left = ''+ totalX +'px'

        }
    });
    $(".art-box").mouseup(function(event){
        sessionStorage.setItem('dragMouse', false)
    });


});
