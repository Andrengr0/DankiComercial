$(()=>{

    $('nav a').click(function(e){
        e.stopPropagation();
        var href = $(this).attr('href');
        var offSetTop = $(href).position().top;
        

        $('html,body').animate({'scrollTop':offSetTop},1000);

        return false;
    })

   
    $(window).scroll(function(){
        $('body').each(function(){
            var positionScroll = $(window).scrollTop();
            // console.log(positionScroll);

            if(positionScroll >= 100){
                $('header nav.menu-fixed ul').slideDown(800)
            }else{
                $('header nav.menu-fixed ul').slideUp(400)
            }
        })
    })

})
