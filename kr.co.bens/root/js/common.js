$(function(){
    AOS.init({disable: 'mobile'});

    var $topM = $('.topMenu'),
    $p = $topM.find('.popUp'),
    $signU = $('.signUp'),
    $csI = $('.csInfo'),
    $ct = $('.content');
    
    // top버튼
    $('#tothetop').click(function(){
        var htmloffset = $('html').offset();
        $('html, body').animate({scrollTop:htmloffset.top},400);
    });
    
    // topMenu
    $topM.find('button').eq(0).click(function(){
        $p.show();
        $(this).css({display:'none'});
        $topM.find('button').eq(1).css({display:'block'});
    });
    $topM.find('button').eq(1).click(function(){
        $p.hide();
        $(this).css({display:'none'});
        $topM.find('button').eq(0).css({display:'block'});
    });

    // hdrWrap
    $('.hdrWrap .bars').click(function(){
        $('.navWrap').slideToggle();
    });

    // signUp
    $signU.find('.read1').click(function(){
        $('.tH1').slideToggle();
    });

    $signU.find('.read2').click(function(){
        console.log('wow');
        $('.tH2').slideToggle();
    });

    // csInfo
    $csI.find('button').click(function(){
        location.href = 'board.html';
    });
});