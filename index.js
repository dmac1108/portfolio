'use strict';

function onPageLoad(){
    console.log("The page has been loaded");
    $('.more-images').hide();
}

$('.scroll_to').click(function(e){
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('html,body').stop().animate({scrollTop: new_position.top},500);
    e.preventDefault();
});

$('.see-more').click(function(){
    $('.more-images').show();
});

$(onPageLoad);