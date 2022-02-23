$(function(){    
    var $mnWrap = $('.mnWrap'),
        $mn_iG = $mnWrap.find('.imgGroup'),
        $mn_pn = $mnWrap.find('.pagination'),
        $ct = $('.content'),
        $pro = $('.product'),
        $sca = $('.scale'),
        $art = $ct.find('section article'),
        $bestI = $('.bestItem'),
        $bensP = $('.bensPeople'),
        $mediaL = $('.mediaLounge'),
        $brandS = $('.brandStory'),
        $showR = $('.showRoom'),
        i = 0,
        startX = 0,
        endX = 0,
        moveX = 50;

// mobile
    if($(window).width() < 420){
        $('.bestItem').mySlider();
        $('.bensPeople').mySlider();
        $('.mediaLounge').mySlider();
        $('.showRoom').mySlider();
    }    
// mnWrap
    $mn_iG.children(':first').appendTo($mn_iG);

    $mnWrap.find('.btPrev').on({
        click: prevHandler
    });

    $mnWrap.find('.btNext').on({
        click: nextHandler
    });
    function prevHandler(){
        $mn_iG.find('.image').last().fadeOut(1000,function(){
            $(this).prependTo($mn_iG).fadeIn(0);
        });
        i = (i+2)%3;
        $mn_pn.children().eq(i).addClass('clicked').siblings().removeClass('clicked');
    }
    function nextHandler(){
        $mn_iG.find('.image').first().fadeOut(0,function(){
            $(this).appendTo($mn_iG).fadeIn(1000);
        });
        i = (i+1)%3;
        $mn_pn.children().eq(i).addClass('clicked').siblings().removeClass('clicked');
    }
    $mnWrap.on({
        touchstart : function(evt){
            startX = evt.originalEvent.touches[0].clientX;
        },
        touchend : function(evt){
            endX = evt.originalEvent.changedTouches[0].clientX;
            console.log(startX, endX);
            if(endX - startX > moveX){
                prevHandler();
            }else if(startX - endX > moveX){
                nextHandler();
            }
        }    
    });
// bestItem
    $bestI.find('article').click(function(){
        location.href = 'shop.html';
    });
// bensPeople
    $bensP.find('.image').click(function(){
        location.href = 'sub2_bensPeople.html';
    });
// mediaLounge
    $mediaL.find('.image').click(function(){
        location.href = 'sub3_media.html'
    });
// brandStory
    $brandS.find('.image').click(function(){
        location.href = 'sub4_whyBens.html'
    });
// showRoom
    $showR.find('.image').click(function(){
        location.href = 'space.html'
    });
});