module.exports = function () {
    mouseMoveAction()
};

function mouseMoveAction() {
    if ( sessionStorage.getItem('dragMouse') == 'true') {

        let diffX = -(parseInt(sessionStorage.getItem('initClientX')) - parseInt(event.clientX))
        let diffY = -(parseInt(sessionStorage.getItem('initClientY')) - parseInt(event.clientY))

        switch (sessionStorage.getItem('dataMove')) {
            case "full-box":
                
                let startClickX = sessionStorage.getItem('initClientX')
                let startClickY = sessionStorage.getItem('initClientY')

                // MOVIMENTACAO NO EIXO (Y)
                let borderTopBox = (parseInt(sessionStorage.getItem('currentBorderTop'))+diffY)
                $('.box-size').css('border-top', ''+borderTopBox+'px solid rgba(99, 102, 104, 0.63)')
                let atualTop = (parseInt(sessionStorage.getItem('currentBorderBottom'))- diffY)
                $('.box-size').css('border-bottom', ''+atualTop+'px solid rgba(99, 102, 104, 0.63)')

                // MOVIMENTACAO NO EIXO (X)
                let borderLeft = (parseInt(sessionStorage.getItem('currentBorderLeft'))+diffX)
                $('.box-size').css('border-left', ''+borderLeft+'px solid rgba(99, 102, 104, 0.63)')
                let atualLeft = (parseInt(sessionStorage.getItem('currentBorderRight'))-diffX)
                $('.box-size').css('border-right', ''+atualLeft+'px solid rgba(99, 102, 104, 0.63)')

                break;
            case "top-box":
                let currentBorderTop = parseInt(sessionStorage.getItem('currentBorderTop'))
                let valorTop = (currentBorderTop+diffY)
                $('.box-size').css('border-top', ''+valorTop+'px solid rgba(99, 102, 104, 0.63)')
                let currentTop = parseInt(sessionStorage.getItem('currentBorderBottom'))
                let newBorderTop = (currentTop - diffY)
                $('.box-size').css('border-bottom', ''+newBorderTop+'px solid rgba(99, 102, 104, 0.63)')
                break;
            case "left-box":
                let currentBorderLeft = parseInt(sessionStorage.getItem('currentBorderLeft'))
                let valorLeft = (currentBorderLeft+diffX)
                $('.box-size').css('border-left', ''+valorLeft+'px solid rgba(99, 102, 104, 0.63)')
                let currentLeft = parseInt(sessionStorage.getItem('currentBorderRight'))
                let newBorderLeft = (currentLeft - diffX)
                $('.box-size').css('border-right', ''+newBorderLeft+'px solid rgba(99, 102, 104, 0.63)')
                break;
            case "right-box":
                let currentSizeRight = parseInt(sessionStorage.getItem('currentSizeRight'))
                let valorRight = (currentSizeRight+diffX)
                $('.box-size').css('width', ''+valorRight+'px')
                let currentRight = parseInt(sessionStorage.getItem('currentBorderRight'))
                let newBorderRight = (currentRight - diffX)
                $('.box-size').css('border-right', ''+newBorderRight+'px solid rgba(99, 102, 104, 0.63)')
                break;
            case "bottom-box":
                let currentSizeHeight = parseInt(sessionStorage.getItem('currentSizeHeight'))
                let valorHeight = (currentSizeHeight+diffY)
                $('.box-size').css('height', ''+valorHeight+'px')
                let currentBottom = parseInt(sessionStorage.getItem('currentBorderBottom'))
                let newBorderBottom = (currentBottom - diffY)
                $('.box-size').css('border-bottom', ''+newBorderBottom+'px solid rgba(99, 102, 104, 0.63)')
                break;
        }
    }
}