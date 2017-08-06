function purpleToFuchsia() {
    $('.purple').css("background-color","fuchsia")
}

function toggleGreenGrey(){
    $('.green').toggleClass("grey");
}

function switchBoxes(){
    div1 = $('.red');
    div2 = $('.blue');

    tdiv1 = div1.clone();
    tdiv2 = div2.clone();
    div1.replaceWith(tdiv2);
    div2.replaceWith(tdiv1);
}

function insertText(){
     $('.purple').append("<p class=\"white\">Hello World</p>");
}

function switchBoxes2(){
   var first = null;
   var second = null;
   $('.colors').children().click(function(){

       second = (second===null&&first!=null)?$(this):second;
       first = (first===null)?$(this):first;
       if (first!=null & second!=null){
           var firstClass = first.attr('class');
           var secondClass = second.attr('class');
           first.removeClass(firstClass).
               addClass(secondClass);
           second.removeClass(secondClass).
               addClass(firstClass);
           first = null;
           second = null;
    }
   })
}

switchBoxes2();

function sameHeight() {
  var highestBox = 0;
        $('.colors').each(function(){  
                if($(this).height() > highestBox){  
                highestBox = $(this).height();  
        }
    });    
   $('.colors .red').height(highestBox);
   $('.colors .purple').height(highestBox);
   $('.colors .blue').height(highestBox);
   $('.colors .green').height(highestBox);
}