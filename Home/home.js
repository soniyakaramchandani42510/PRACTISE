// Play initial animations on page load.
$window.on('load', function() {
    window.setTimeout(function() {
        $body.removeClass('is-preload');
    }, 100);
});

// Header.
if ($banner.length > 0
&&	$header.hasClass('alt')) {

    $window.on('resize', function() { $window.trigger('scroll'); });

    $banner.scrollex({
        bottom:		$header.outerHeight(),
        terminate:	function() { $header.removeClass('alt'); },
        enter:		function() { $header.addClass('alt'); },
        leave:		function() { $header.removeClass('alt'); }
    });

}
//Get the button
var mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}