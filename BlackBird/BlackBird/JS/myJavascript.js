var pContainerHeight = $('.bird-box').height();

$(window).scroll(function (event) {
    var scrollVal = $(window).scrollTop();
    if (scrollVal <= pContainerHeight) {
        $('.logo').css({
            'transform': 'translate(0px, ' + scrollVal / 2 + '%)'
        });
        $('.back-bird').css({
            'transform': 'translate(0px, ' + scrollVal / 4 + '%)'
        });
        $('.fore-bird').css({
            'transform': 'translate(0px, -' + scrollVal / 40 + '%)'
        });
    }
    console.log(scrollVal);
})