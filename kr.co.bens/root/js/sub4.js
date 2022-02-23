$(function () {
    // mission
    var $mission = $('.mission'),
    $iG_Lft = $mission.find('.imgViewLft .imgGroup'),
    $iG_Bot = $mission.find('.imgViewBot .imgGroup'),
    $h5G = $mission.find('.h5View .hGroup'),
    $h6G = $mission.find('.h6View .hGroup'),
    $btStart = $mission.find('.btStart'),
    $btPause = $mission.find('.btPause'),
    play = setInterval(nextSlide, 3000);

    $iG_Lft.children(':first').appendTo($iG_Lft);
    $iG_Bot.children(':first').appendTo($iG_Bot);
    $h5G.css({left:'-100%'}).children(':last').prependTo($h5G);
    $h6G.css({top:'-100%'}).children(':last').prependTo($h6G);
    function nextSlide(){
        $iG_Lft.find('.image').first().fadeOut(0,function(){
            $(this).appendTo($iG_Lft).fadeIn(1000);
        });
    
        $iG_Bot.find('.image').first().fadeOut(0,function(){
            $(this).appendTo($iG_Bot).fadeIn(1000);
        });
    
        $h5G.stop().animate({left:'-200%'}, {
            easing: 'easeOutBounce',
            duration: 1000,
            done: function(){
                $(this).css({left: '-100%'}).children(':first').appendTo(this);
            }
        });
    
        $h6G.stop().animate({top:'-200%'}, {
            duration: 1000,
            done: function(){
                $(this).css({top: '-100%'}).children(':first').appendTo(this);
            }
        });
    }
    $btStart.click(function(){
        setInterval(nextSlide, 3000);
        $(this).css({display: 'none'}).siblings().css({display: 'block'});
    });
    $btPause.click(function(){
        clearInterval(play);
        $(this).css({display: 'none'}).siblings().css({display: 'block'});
    });

// lab
var $lab = $('.lab'),
    $span = $lab.find('section span');

    gsap.from($span, {
    top:3,
    ease: 'circle.out',
    stagger: {
        each: 0.03,
        repeat: -1,
        yoyo: true
    }
});

$lab.find('.imgViewBot .image').click(changeImg);
function changeImg(){
    var path = $(this);
    path = $(this).css('backgroundImage');
$lab.find('.imgViewLft .image').css('backgroundImage', path);
};

});