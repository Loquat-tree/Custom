$(function(){
    $('.lsm-scroll').slimscroll({
        height: 'auto',
        position: 'right',
        railOpacity: 1,
        size: "5px",
        opacity: .4,
        color: '#fffafa',
        wheelStep: 5,
        touchScrollStep: 50 //滚动量当用户使用手势
    });
    $('.left_menu ul ul').css("display", "none");
    // menu收缩展开
    $('.menu a').on('click',function(){
        $('.lsm-scroll').slimscroll({
            height: 'auto',
            position: 'right',
            size: "8px",
            color: '#9ea5ab',
            wheelStep: 5,
            touchScrollStep: 50
        });
        if (!$('#item').hasClass('mini')) {
            $(this).parent("li").siblings("li.list").children('ul').slideUp(200);
            if ($(this).next().css('display') == "none") {
                //未展开
                // $('.list').children('ul').slideUp(300);
                $(this).next('ul').slideDown(200);
                $(this).parent('li').addClass('menu-show').siblings('li').removeClass('menu-show');
            }else{
                //已展开
                $(this).next('ul').slideUp(200);
                //$('.list.menu-show').removeClass('menu-show');
                $(this).parent('li').removeClass('menu-show');
            }
        }
    });
    //mini
    $('.mini-btn svg').on('click',function(){
        if ($('.mini-btn input[type="checkbox"]').prop("checked")) {
            $('.list.menu-show').removeClass('menu-show');
            $('.left_menu ul').removeAttr('style');
            $('#item').addClass('mini');
            $('#item').stop().animate({width : 60},200);
        }else{
            $('#item').removeClass('mini');
            $('.left_menu ul ul').css("display", "none");
            $('#item').stop().animate({width: 210},200);
        }

    });
});
