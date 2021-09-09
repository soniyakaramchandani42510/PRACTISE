// Play initial animations on page load.
function myMove() { alert("hello"); }
window.onload = myMove;

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


//  chidiyan udane ka code hai niche dhyan se---------------

// function myMove() { alert("hello"); }
// window.onload = myMove;

var id1 = null;
var id2 = null;
function myMove() {
    var elem1 = document.getElementById("birdLR");
    var elem2 = document.getElementById("birdRL");
    var pos1 = 0;
    var pos2 = 0;
    clearInterval(id1);
    clearInterval(id2);
    id1 = setInterval(frame1, 10);
    id2 = setInterval(frame1, 10);
    function frame1() {
        if (pos1 == 250) {
            clearInterval(id1);
        }
        if (pos1 == 250) {
            clearInterval(id1);
        }
        else {
            pos1 = pos1 + 1;
            pos2 = pos2 + 1;
            elem1.style.top = -1.5 * pos1 + 'px';
            elem1.style.left = pos1 + 'px';
            elem2.style.top = -1.5 * pos2 + 'px';
            elem2.style.right = pos2 + 'px';
        }
    }
}
//  chidiyan udane ka code hai upar dhyan se ---------------


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