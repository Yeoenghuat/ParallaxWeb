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
})