'use strict';

function onPageLoad(){
    console.log("The page has been loaded");
    $('.more-images-p1').hide();
    $('.more-images-p2').hide();
    $('.more-images-p3').hide();
}

$('.scroll_to').click(function(e){
    var jump = $(this).attr('href');
    console.log(jump);
    var new_position = $(jump).offset();
    console.log(new_position);
    $('html,body').stop().animate({scrollTop: new_position.top},500);
    e.preventDefault();
});

$('.see-more').click(function(){
    let tag = $(this).attr('href').slice(1,3);
    let toggleClass = '.more-images-' + tag;
    console.log(toggleClass);
    $("div").next(toggleClass).toggle();
    $(this).text(toggleText($(this).text()));
});

function toggleText(eText){
    console.log("in the toggle text function");
    console.log(eText);
    const showText = '"Click to see more project images"';
    const hideText = '"Click to hide more project images"';
    if(eText == showText){
        return hideText;
    }
    else{
        return showText;
    }
}

$(onPageLoad);