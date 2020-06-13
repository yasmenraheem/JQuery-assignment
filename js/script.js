


////////open sideNav////////
$("#caption span").click(function(){
  $(".sidenav").animate({ width: "250px" }, 500);
  $("#caption").css("margin-left" , "250px");
  $("#caption span").animate({"left" : "250px"}, 500)
});

////close sideNav//////
$("#SideBar .btnclose").click(function(){
  // let sideWidth = $(".sidenav").innerWidth()
  $(".sidenav").animate({width: "0px"} , 500);
  $("#caption").css("margin-left" , "0px");
  $("#caption span").animate({"left" : "0px"}) ,1500;
});


/////toggler/////////////////////
$("#details .firstDiv").css("display" , "block");
$("#details h3").click(function(){
  $(this).next().slideToggle(700);

$("details div").not($(this).next()).slideUp(700);

});
// ///////////links csroll//////////////
$("a").click(function () {
  let aHref = $(this).attr("href"); 
  let sectionOffset = $(aHref).offset().top;
  $("html,body").animate({ scrollTop: sectionOffset }, 1500);
});

// ////counter///////////////
function addEventCounter(){
   let currentDate = new Date();
   let eventDate = new Date(2019,09,10);

   currentTime = currentDate.getTime();
   eventTime = eventDate.getTime();
   eventCounter = currentTime - eventTime;
   
   let secs = Math.floor(eventCounter/1000);
   let mins = Math.floor(secs/60);
   let hours = Math.floor(mins/60);
   let days = Math.floor(hours/24);

   hours%=24;
   mins%=60;
   secs%=60;
   hours =(hours<10)? "0"+hours:hours;
   mins=(mins<10)? "0"+mins:mins;
   secs=(secs<10)? "0"+secs:secs;

   $("#days").text(-days + "D");
   $("#hours").text(-hours + "h");
   $("#minutes").text(-mins + "m");
   $("#seconds").text(-secs + "s");
   setTimeout(addEventCounter,1000)

}
addEventCounter();

////// inputs ///////////////
$(function(){
  let maxChar =100;
  $("textarea").keyup(function(){
    let length=$(this).val().length;
    let character = maxChar - length;
      
     if(character<=0)
      {
        $("#character").text("Not available characters");  
      }
      else{
        $("#character").text(character);
      }
  });
});


