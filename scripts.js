// Twitter and Facebook needs to load first

// Twitter logo
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Facebook logo
(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

// Rule below let's me know that scripts.js file has been linked correctly and will alert me when DOM is ready 
$(document).ready(function(){


//Red border around the message box 
$(".message-box").css("border","2px solid red");
	
	// Smooth scrolling
	var $root = $('html, body');
	$('.navbar-nav a').click(function() {
		var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top 
		}, 500, function () {
			window.location.hash = href;
		});
		return false;
	});

  // Stellar
  $.stellar();

  // Tooltip for Home section 
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Tooltip for About section
  $(function () {
    $("#webdev").tooltip();
  });

  // event listener
  $('#button').on('click', function() {
  	var comment = $('.message-box').val();
  	$('#visible-comment').html(comment);
  	$('.message-box').hide();
  	return false;
  });

  //work section

  for(var i = 0; i < works.length; ++i) {
    $("#work").append("\
      <div class='col-sm-6 col-md-3'>\
        <a href='img/wip.png' class='work-img'>\
          <img class='img-responsive' src='" + works[i].pic +"'>\
          <span class='info'><p class='proj-title'>Title:</p>'" + works[i].title +"'</span>\
        </a>\
      </div>\
      ");  
  };


  $(".work-img").mouseenter( function() {
    $(".info", this).show();
  }).mouseleave( function() {
    $(".info", this).hide();
  });


  var images = $("work img");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  };



 	// Textarea keyup event listener 

 	$('.message-box').on('keyup', function() {
 		console.log('keyup happened');  //here we make sure we're catching the keyup
 		var charCount = $('.message-box').val().length;  //here we set the length of the content of the textarea to a variable
 			console.log(charCount);  //here we make sure we set it to the right value
 			$('#charCount').html(charCount);  //here we show a running character count to the user

 		if(charCount > 50) {   
 			$("#charCount").css("color", "red");  //need to turn character to red 
 		} else {
 			$("#charCount").css("color", "black");  //need it to be black
 		};

 	});
});

  // script to add Google Map using JavaScript API

  var map; 
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 52.509273, lng: 13.423316},
      zoom: 8
    });
  }


