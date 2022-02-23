$(function(){
    var $fluid = $('.fluid'),
        $artV = $fluid.find('.artView'),
        $artG = $fluid.find('.artGroup'),
        $art = $fluid.find('article'),
        $drag = $fluid.find('.drag'),
        $bar = $fluid.find('.bar'),
        dragWidth = 0,
        barPosition = 0,
        groupWidth = 0,
        groupPosition = 0;

    // mobile
    if($(window).width() < 420){
        $('.idea').mySlider();
        $('.space').titleSlider();
    }
    $drag.on({
        mousedown: downHandler,
        mouseover: hoverHandler,
        mousemove: hoverHandler,
        mouseout: noHoverHandler,
        mouseup: upHandler
    });
    $bar.draggable({
        containment: 'parent',
        // axis: 'x',
        start: startHandler,
        drag: dragHandler,
        done: noHoverHandler
    });
    function downHandler(){
        $bar.addClass('move');
    }
    function hoverHandler(){
        $bar.css({height: 4});
    }
    function noHoverHandler(){
        $bar.css({height: 2});
    }
    function upHandler(){
        $bar.removeClass('move');
    }
    function startHandler(){
        dragWidth = $drag.outerWidth()-$bar.outerWidth();
        groupWidth = $artV.outerWidth()-$artG.outerWidth();
    }
    function dragHandler(){
        barPosition = $bar.css('left');
        barPosition = parseInt(barPosition);
        groupPosition = barPosition*groupWidth/dragWidth;
        $artG.css({left: groupPosition});
    }
});