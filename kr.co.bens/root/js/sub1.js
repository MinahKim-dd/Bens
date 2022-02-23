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
        $('.sofaBed').mySlider();
        $('.title').titleSlider();
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

    // tags
    var $tags = $('.tags'),
        $tag = $tags.find('.tag');

    if($(window).width() > 420){
        $tags.find('article').on({
            mouseover: tagShowHandler,
            mouseout : tagHideHandler    
        });
        function tagShowHandler(){
            $(this).find('.tagWrap').css({opacity: 1});
        }
        function tagHideHandler(){
            $(this).find('.tagWrap').css({opacity: 0});
        }
        $tag.mouseover(txtShowHandler);
    }
    $tag.click(txtShowHandler);
    function txtShowHandler(){
        $(this).parent().addClass('selected');
        $(this).parent().siblings().removeClass('selected');
    }
    $tags.find('.texts').click(function(){
        location.href = 'shop.html'
    });

    // hdrBtn
    var $hdrBtn = $('.hdrBtn');

    $hdrBtn.find('.txtRight').click(function(){
        location.href = 'sub1_product.html'
    });

    // title
    var $title = $('.title');

    $title.find('article').click(function(){
        location.href = 'sub1_product.html'
    });

    // closet
    var $closet = $('.closet');

    $closet.find('article').click(function(){
        location.href = 'sub1_product.html'
    });

    // sofaBed
    var $sofaBed = $('.sofaBed');

    $sofaBed.find('article').click(function(){
        location.href = 'shop.html'
    });
});