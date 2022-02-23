(function($){
    $.fn.mySlider = function(perView){
        var $slider = $(this),
            $slideView = $slider.find('.slide-view'),
            $slideGroup = $slider.find('.slide-group'),
            $slideItem = $slider.find('.slide-item'),
            $pagination = $slider.find('.pagination'),
            $btPrev = $slider.find('.bt-prev'),
            $btNext = $slider.find('.bt-next'),
            itemIndex = 0,
            i = 0,
            startX = 0,
            endX = 0,
            moveX = 50;
    
        if(perView == undefined)perView = 1;
        itemIndex = $slideItem.last().index()+1;
        $slideView.css({
            overflow : 'hidden'
        });

        resizeHandler();

        $(window).on({
            resize : resizeHandler
        });

        function resizeHandler(){
            $slideGroup.css({
                width : $slideView.outerWidth() / perView * itemIndex, 
                display :'flex',
                justifyContent : 'space-around',
                alignItems : 'stretch'
            });
            $slideItem.css({
                width : $slideGroup.outerWidth() / itemIndex
            });
            if(perView > 1){
                $slideItem.css({
                    width : $slideGroup.outerWidth() / itemIndex - 20
                })
            }else{
                $slideItem.css({
                    width : $slideGroup.outerWidth() / itemIndex
                });
            }
        }

        for(var i = 0; i < itemIndex; i++)$pagination.append('<span></span>');
        $pagination.children(':first').addClass('clicked');
        
        $slideGroup.css({
            position: 'relative',
            left : -100/perView+'%'
        }).children(':last').prependTo($slideGroup);
        $btPrev.on({
            click : prevHandler
        });
        $btNext.on({
            click : nextHandler
        });
        function prevHandler(){
            $slideGroup.stop().animate({
                left : 0
            }, {
                complete : function(){
                    $slideGroup.css({left: -100/perView+'%'}).children(':last').prependTo($slideGroup);
                }
            });
            j = itemIndex - 1;
            i = (i+j)%itemIndex;
            $pagination.children().eq(i).addClass('clicked').siblings().removeClass('clicked');
        }
        function nextHandler(){
            $slideGroup.stop().animate({
                left : (-100/perView)*2+'%'
            }, {
                complete : function(){
                    $slideGroup.css({left: -100/perView+'%'}).children(':first').appendTo($slideGroup);
                }
            });
            i = (i+1)%itemIndex;
            $pagination.children().eq(i).addClass('clicked').siblings().removeClass('clicked');
        }
        $slideView.on({
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
        return this;
    }
})($)