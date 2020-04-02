$(function(){
  var html = ''
     +'<div class="slider" id="slider">'
       +'<div class="slide"><img src="img/b5.png" alt=""></div>'
        +'<div class="slide"><img src="img/b1.png" alt=""></div>'
        +'<div class="slide"><img src="img/b2.png" alt=""></div>'
        +'<div class="slide"><img src="img/b3.png" alt=""></div>'
        +'<div class="slide"><img src="img/b4.png" alt=""></div>'
        +'<div class="slide"><img src="img/b5.png" alt=""></div>'
        +'<div class="slide"><img src="img/b1.png" alt=""></div>'
      +'</div>'
      +'<span id="left"><</span>'
      +'<span id="right">></span>'
      +'<ul class="nav" id="navs">'
        +'<li class="active">1</li>'
        +'<li>2</li>'
        +'<li>3</li>'
        +'<li>4</li>'
        +'<li>5</li>'
      +'</ul>',
    $act = $(html),
    $box = $('#box');
    var num = 1,width = 1200,count = 1,timer = null;
    $box.append($act);
    
    //自动轮播
    interval()
    function interval(){
    timer = setInterval(function(){
      count++
      if(count === 6) {
        count = 1
        $('.slider').css("left",0)
      }
      move()
    },2500)}

   //左右箭头
    $('#left').click(function(){
      clearInterval(timer)
      if(count === 1) {
        count = 6
        $('.slider').css("left","-7200px")
      }
      count--
      move()
      setTimeout(interval(),2500)
    })

    $('#right').click(function(){
      clearInterval(timer)
      count++
      if(count === 6) {
        count = 1
        $('.slider').css("left",0)
      }

      move()
      setTimeout(interval(),2500)
    })

    //左右箭头颜色
    $('span').mouseover(function(){
      $('span').animate({opacity:0.5},1000)
    })
    $('span').mouseout(function(){
      $('span').animate({opacity:0},1000)
    })

   //指示器
    $('.nav li').click(function(){
      clearInterval(timer)
      count=$(this).index()+1
      if(count === 1) {
        count = 6
        $('.slider').css("left","-7200px")
      }
      if(count === 6) {
        count = 1
       
      }
      move()
      setTimeout(interval(),2500)
    })    

  function move(){
    $('.slider').finish().animate({left:-width*count+"px"},1000)
    $('.nav li').eq(count-1).addClass("active").siblings().removeClass("active")
   }
 
}
)
