var pContainerHeight = $('.bird-box').height();

$(window).scroll(function (event) {
    var scrollVal = $(window).scrollTop();
    $('.logo').css({
        'transform': 'translate(0px, ' + scrollVal / 2 + '%)'
    });
    $('.back-bird').css({
        'transform': 'translate(0px, ' + scrollVal / 4 + '%)'
    });
    $('.fore-bird').css({
        'transform': 'translate(0px, -' + scrollVal / 40 + '%)'
    });

    //console.log(scrollVal + ' ' + $('.clothes-pics').offset().top + ' ' + $(window).height() / 1.1);
    if (scrollVal > $('.clothes-pics').offset().top - ($(window).height() / 1.1)) { //set the class when scroll 10% of the screen
        $('.clothes-pics figure').each(function (i) {
            setTimeout(function () {
                $('.clothes-pics figure').eq(i).addClass('is-showing'); // reset back the opacity in css
            }, 200 * (i + 1)); // timer value for each loop
        });
    };

    if (scrollVal > $('.large-window').offset().top - ($(window).height() / 7)) {
        $('.peeking-window p').css({
            'opacity': '1',
            'transform': 'translateX(0px)'
        });
    };

    if (scrollVal > $('.large-window').offset().top - $(window).height()) {
        $('.large-window').css({
            'background-position': 'center ' + ((scrollVal - $('.large-window').offset().top) + 200) + 'px'
        });

        var opacity = (scrollVal - $('.large-window').offset().top + 400) / (scrollVal / 5);

        $('.window-tint').css({
            'opacity': opacity
        });
    }

    if (scrollVal > $('.category-window').offset().top - $(window).height()) {
        var offset = Math.min(0, scrollVal - $('.category-window').offset().top + $(window).height() - 600);

        $('.category-item-1').css({
            'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)'
        });
        console.log(offset);
        $('.category-item-2').css({
            'transform': 'translate(0px, ' + Math.abs(offset) + 'px)'
        });

        $('.category-item-3').css({
            'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)'
        });
    }
})