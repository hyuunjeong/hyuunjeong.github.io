var a = 6;
console.log(a);


$("document").ready(function(){
  $(".RISD").hover(function(){
    $(".RISDlogo").css("visibility","visible");
  }, function(){
    $(".RISDlogo").css("visibility","hidden");
  });
});


$("document").ready(function(){
  $(".stopicon").hover(function(){
    $(".dontfeedcont").css("border","4px dotted");
  }, function(){
    $(".dontfeedcont").css("border","hidden");
  });
});


$("document").ready(function(){
  $(".dontfeed").hover(function(){
    $(".dontfeedcont").css("border","4px dotted");
  }, function(){
    $(".dontfeedcont").css("border","hidden");
  });
});


$("document").ready(function(){
  $(".dontfeed").hover(function(){
    $("#dontfeedcap").css("color","black");
  }, function(){
    $("#dontfeedcap").css("color","rgb(222, 222, 222)");
  });
});


$("document").ready(function(){
  $(".stopicon").hover(function(){
    $("#dontfeedcap").css("color","black");
  }, function(){
    $("#dontfeedcap").css("color","rgb(222, 222, 222)");
  });
});
