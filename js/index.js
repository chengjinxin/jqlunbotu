$(function () {
    //1) . 使用jQuery来做或者有原生js都可以
    //2) . 轮播图能自动播放
    //3) . 轮播图能点击左右按钮播放
    //4) . 轮播图图片播放有淡入淡出效果
    //5) . 左右按钮可以暂时不用和底部小方块对应播放//
    //--------------------------------------------------

    //1. 根据图片数量生成下面的数字按钮
    $('.imgUl>li').each(function (i, ele) {
        $('<li>' + i + '</li>').appendTo($('.btnOl'))
    })

    $('.btnOl>li:eq(0)').addClass('current')

    //2. 鼠标经过下面的数字按钮,以淡入淡出的效果切换图片,并且当前按钮高亮
    $('.btnOl>li').mouseover(function () {
        $('.imgUl>li:eq(' + $(this).index() + ')').stop(true, true).fadeIn().siblings().stop(true, true).fadeOut()
        $(this).addClass('current').siblings().removeClass('current')
        currentIndex = $(this).index()
    })

    //3. 点击左右箭头,切换轮播图
    var currentIndex = 0;
    $('.right').click(function () {
        currentIndex++
        if (currentIndex == $('.imgUl>li').length) {
            currentIndex = 0
        }
        clickChange()
    })
    $('.left').click(function () {
        currentIndex--
        if (currentIndex < 0) {
            currentIndex = $('.imgUl>li').length - 1
        }
        clickChange()
    })
    function clickChange() {
        $('.imgUl>li:eq(' + currentIndex + ')').stop().fadeIn().siblings().stop().fadeOut()
        $('.btnOl>li:eq(' + currentIndex + ')').addClass('current').siblings().removeClass('current')
    }

    //4. 自动播放
    var timer = setInterval(autoPlay, 1000)
    function autoPlay() {
        $('.right').trigger('click')
    }
    $('.box').mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        timer = setInterval(autoPlay, 1000)
    })
})