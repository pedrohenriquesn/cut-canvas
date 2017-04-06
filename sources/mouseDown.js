module.exports = function () {
    initMouseDown()
};

function initMouseDown() {
        $('.box-size').css('border-color', 'rgba(99, 102, 104, 0.63)')
        // $('.svg-tracejado').toggle()
        $('.svg-tracejado').css('display', 'block')
        // $('.sizeX').css('background-color', '#3E6892')
        // $('.sizeY').css('background-color', '#3E6892')

        sessionStorage.setItem('dragMouse', true)
        sessionStorage.setItem('initClientX', event.clientX)
        sessionStorage.setItem('initClientY', event.clientY)

        sessionStorage.setItem('dataMove', event.target.getAttribute('data-move'))
        
        switch (sessionStorage.getItem('dataMove')) {
            case "full-box":
                sessionStorage.setItem('currentBorderTop', parseInt($('.box-size').css('border-top')))
                sessionStorage.setItem('currentBorderBottom', parseInt($('.box-size').css('border-bottom')))
                sessionStorage.setItem('currentBorderLeft', parseInt($('.box-size').css('border-left')))
                sessionStorage.setItem('currentBorderRight', parseInt($('.box-size').css('border-right')))
                break;
            case "top-box":
                sessionStorage.setItem('currentBorderTop', parseInt($('.box-size').css('border-top')))
                sessionStorage.setItem('currentBorderBottom', parseInt($('.box-size').css('border-bottom')))
                break;
            case "right-box":
                sessionStorage.setItem('currentSizeRight', parseInt($('.box-size').css('width')))
                sessionStorage.setItem('currentBorderRight', parseInt($('.box-size').css('border-right')))
                break;
            case "left-box":
                sessionStorage.setItem('currentBorderLeft', parseInt($('.box-size').css('border-left')))
                sessionStorage.setItem('currentBorderRight', parseInt($('.box-size').css('border-right')))
                break;
            case "bottom-box":
                sessionStorage.setItem('currentSizeHeight', parseInt($('.box-size').css('height')))
                sessionStorage.setItem('currentBorderBottom', parseInt($('.box-size').css('border-bottom')))
                break;
        }
}