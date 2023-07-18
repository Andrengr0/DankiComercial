$(function(){

    initSlider();
    autoPlay();

    var curIndex = 0;
    var amt;

    function initSlider(){
        amt = $('.sobre-author').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $('.sobre-author').css('width',sizeBoxSingle+'%');
        $('.scroll-wrapper').css('width',sizeContainer+'%');

        for(var i=0; i < amt; i++){
            if(i == 0){
                $('.slider-bullets').append('<span style="background-color: #000;"></span>');               
            }else{
                $('.slider-bullets').append('<span></span>');
            }
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt){
                curIndex = 0;
            }
            goToSlider(curIndex);
        },4000)
    }

    function goToSlider(){
        var offSetX = $('.sobre-author').eq(curIndex).offset().left - $('.scroll-wrapper').offset().left;        

        $('.slider-bullets span').css('background-color','rgb(153, 153, 153)')
        $('.slider-bullets span').eq(curIndex).css('background-color','#000')
        $('.scrollEquipe').stop(true,true).animate({'scrollLeft':offSetX+'px'});
    }

    $(window).resize(function(){
        $('.scrollEquipe').stop(true,true).animate({'scrollLeft':0});
    })

})