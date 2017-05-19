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



