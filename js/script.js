var a = 6;
console.log(a);

/*<---------RISD logo in intro-------->*/


$("document").ready(function(){
  $(".RISD").hover(function(){
    $(".RISDlogo").css("visibility","visible");
  }, function(){
    $(".RISDlogo").css("visibility","hidden");
  });
});



/*<---------Don't feed the birds-------->*/

        /*<---------border on hover-------->*/

$("document").ready(function(){
  $(".stopicon").hover(function(){
    $("#dontfeedcont").css("border","4px dotted");
  }, function(){
    $("#dontfeedcont").css("border","hidden");
  });
});

$("document").ready(function(){
  $(".dontfeed").hover(function(){
    $("#dontfeedcont").css("border","4px dotted");
  }, function(){
    $("#dontfeedcont").css("border","hidden");
  });
});

        /*<---------caption on hover-------->*/

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


/*<---------MONA-------->*/



        /*<---------border on hover-------->*/
$("document").ready(function(){
  $(".letter").hover(function(){
    $("#monacont").css("border","4px dotted");
  }, function(){
    $("#monacont").css("border","hidden");
  });
});

$("document").ready(function(){
  $(".monalogo").hover(function(){
    $("#monacont").css("border","4px dotted");
  }, function(){
    $("#monacont").css("border","hidden");
  });
});

        /*<---------caption hover-------->*/

$("document").ready(function(){
  $(".letter").hover(function(){
    $("#monacap").css("color","black");
  }, function(){
    $("#monacap").css("color","rgb(222, 222, 222)");
  });
});


$("document").ready(function(){
  $(".monalogo").hover(function(){
    $("#monacap").css("color","black");
  }, function(){
    $("#monacap").css("color","rgb(222, 222, 222)");
  });
});