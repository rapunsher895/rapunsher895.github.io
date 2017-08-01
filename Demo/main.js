jQuery(document).ready(function()
{
    //按下開始
    $('button').click(function(){
        $("#first").animate({
            left:'700px',
            opacity:'0',
            function(){
                $("#first").css("display","none");
            }
        });
        
        $("#pass").fadeOut(1000);
        $("#gameSec").fadeIn(2000);
        $("body").addClass("BGC1");
        $("body").removeClass("BGC2");
    });
    
    //抓到鬼
    $('#ghost').click(function(){
        $("#gameSec").fadeOut(1000);
        $("body").addClass("BGC2");
        $("#pass").fadeIn(3000);
    });
});
