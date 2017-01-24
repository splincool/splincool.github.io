$( window ).load(function() {
  $(".slides").show();
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;


if (w > 980) {
  var $overlay = $('<div id="overlay"><img src="assets/images/close.png" id="cross"></div>');
  var $image = $("<img>");

  $overlay.append($image);


  $("body").append($overlay);


  $(".imagegrid-image img").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("src");
    
    $image.attr("src", imageLocation);
    
    $overlay.show();

  });


  $overlay.click(function(){
    $overlay.hide();
  });
}























