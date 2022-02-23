$(function(){
    var $ct41 = $('.ct41'),
        $artV = $ct41.find('.artView'),
        $artG = $ct41.find('.artGroup'),
        $art = $ct41.find('article'),
        // 텍스트를 데이터로 사용하는 데이터변수, json파일로 불러올수 있습니다.
        artH4 = ['베스트 제품 1',
                '베스트 제품 2',
                '베스트 제품 3',
                '베스트 제품 4',
                '베스트 제품 5',
                '베스트 제품 6',
                '베스트 제품 7',
                '베스트 제품 8'],
        $drag = $ct41.find('.drag'),
        $bar = $ct41.find('.bar'),
        dragWidth = 0,
        barPos = 0,
        groupWidth = 0,
        groupPos = 0;

    // $art.clone() < photoshop에서 Ctrl+C와 같은 개념
    // $art.clone().appendTo($artG); // 소위 붙여넣기를 해야함
    for(var i=0; i<7; i++){
        // 클론만 7번 먼저 하고 다음이 실행되어 첫번째 아티클의 이미지에 i0~6까지 생김
        $art.clone().appendTo($artG);
        // $art.find('.image').addClass('i'+i);
    }

    // 아래 요소.each 실행 전에 클론된 (1개였던) 아티클을 8개로 인식할수 있도록 다시 한번 값을 불러줍니다.
    $art = $ct41.find('article');

    // 요소.each([callback]) < 요소 각각 callback을 실행합니다.
    // callback의 매개변수로 인덱싱을 반환합니다.
    $art.each(function(i){
        console.log(i); // 0~7
        $art.eq(i).find('h4').text(artH4[i]);
        $art.eq(i).find('.image').addClass('i'+(i+1));
    });

    $bar.draggable({
        containment: 'parent',
        axis: 'x',
        start: startHandler,
        drag: dragHandler
    });
    function startHandler(){
        dragWidth = $drag.outerWidth()-40;
        groupWidth = $artV.outerWidth()-$artG.outerWidth();
    }
    function dragHandler(){
        barPos = $bar.css('left');
        barPos = parseInt(barPos);
        groupPos = barPos * groupWidth / dragWidth;
        $artG.css({left: groupPos});
    }
});

$(function(){
    var $ct41 = $('.ct41'),
        $artV = $ct41.find('.artView'),
        $artG = $ct41.find('.artGroup'),
        $drag = $ct41.find('.drag'),
        $bar = $ct41.find('.bar'),
        dragWidth = 0,
        barPos = 0,
        groupWidth = 0,
        groupPos = 0;

    $bar.draggable({
        containment: 'parent',
        axis: 'x',
        start: startHandler,
        drag: dragHandler
    });
    function startHandler(){
        //.drag너비 - .bar너비
        dragWidth = $drag.outerWidth()-40;

        // .artGroup너비 - .artView너비
        // group = $artG.outerWidth()-$artV.outerWidth();

        // 양수 아닌 음수 형태의 값이어야 하므로 거꾸로 써줌
        groupWidth = $artV.outerWidth()-$artG.outerWidth();
        // console.log(dragWidth, groupWidth);
    }
    function dragHandler(){
        //문자형 숫자값
        barPos = $bar.css('left');
        // 정수형태로 분석
        barPos = parseInt(barPos);
        groupPos = barPos * groupWidth / dragWidth;
        // console.log(barPos, groupPos);
        $artG.css({left: groupPos});
    }
});