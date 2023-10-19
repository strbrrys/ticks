$(function(){
    var imageSlider = $('.image-slider')
    var imageContainer = $('.image-slider-container')
    var images = $('.images')


    var imageWidth = images.width()
    var imageHeight = images.height()
    var imageCount = images.length
    var totalWidth = imageCount * imageWidth



    imageSlider.css({
        width:imageWidth,
        height: imageHeight,
    })

	
    imageContainer.css({
        width: totalWidth, 
        marginLeft: -imageWidth 
    })

   
    $('#l-arrow').on('click', function(){
        imageContainer.animate({left: +imageWidth, }, 'slow', () => {
                $('.images:last-child').prependTo('.image-slider-container')
                $('.image-slider-container').css('left', '0')
            }
        )
    })
    
    $('#r-arrow').on('click', function(){
        imageContainer.animate({
            left: -imageWidth, }, 'slow', () => {
                $('.images:first-child').appendTo('.image-slider-container')
                $('.image-slider-container').css('left', '0')
            }
        )
    })
})
