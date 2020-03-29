$(function(){
    $('#fullpage').fullpage({
        verticalCentered:false,
        controlArrows: false,
        slidesNavigation:true,
        afterSlideLoad:function(anchorLink,index,slideAnchor,slideIndex){
            // console.log(slideIndex);
            $('.img').eq(slideIndex).removeClass('slide_leave');
            $('.img').eq(slideIndex).addClass('slide_now');
        },
        onSlideLeave:function(anchorLink,index,slideAnchor,slideIndex){
            // console.log(slideAnchor);
            $('.img').eq(slideAnchor).removeClass('slide_now');
            $('.img').eq(slideAnchor).addClass('slide_leave');
        },
        afterLoad:function (link,index) {
            /*index 序号 1开始  当前屏的序号*/
            console.log(index);
            $('.section').eq(index-1).addClass('now');
            if(index == 1){
                $('.head').addClass('appear');
                $(".head").removeClass("change")
            }else if(index==2||index==3||index==4||index==5||index==6||index==7||index==8){
                $(".nexthead").addClass("nextheadappear");
            }
        },
        onLeave:function (index,nextIndex,direction) {
            console.log(index);
            if(index == 1 && nextIndex == 2){
                $(".head").addClass("change")
                $(".head").removeClass("appear")
                $(".gsjs").addClass("red")
            }else if(index == 2 && nextIndex == 1){
                $(".nexthead").removeClass("nextheadappear")
                $(".gsjs").removeClass("red")
            }else if(index == 2 && nextIndex == 3){
                $(".gsjs").removeClass("red")
                $(".cpfw").addClass("red")
            }else if(index == 3 && nextIndex == 2){
                $(".cpfw").removeClass("red")
                $(".gsjs").addClass("red")
            }else if(index == 3 && nextIndex == 4){
                $(".cpfw").removeClass("red")
                $(".cpgn").addClass("red")
            }else if(index == 4 && nextIndex == 3){
                $(".cpgn").removeClass("red")
                $(".cpfw").addClass("red")
            }else if(index == 4 && nextIndex == 5){
                $(".cpgn").removeClass("red")
                $(".cpys").addClass("red")
            }else if(index == 5 && nextIndex == 4){
                $(".cpys").removeClass("red")
                $(".cpgn").addClass("red")
            }else if(index == 5 && nextIndex == 6){
                $(".cpys").removeClass("red")
                $(".khal").addClass("red")
            }else if(index == 6 && nextIndex == 5){
                $(".khal").removeClass("red")
                $(".cpys").addClass("red")
            }else if(index == 6 && nextIndex == 7){
                $(".khal").removeClass("red")
                $(".xwgg").addClass("red")
            }else if(index == 7 && nextIndex == 6){
                $(".xwgg").removeClass("red")
                $(".khal").addClass("red")
            }else if(index == 7 && nextIndex == 8){
                $(".xwgg").removeClass("red")
                $(".lxwm").addClass("red")
            }else if(index == 8 && nextIndex == 7){
                $(".lxwm").removeClass("red")
                $(".xwgg").addClass("red")
            }

        }








    })
});
//让slide自动滚动
setInterval(function(){
    $.fn.fullpage.moveSlideRight()
},3000)
$(".sy").click("on",function(){
    alert("111")
})
