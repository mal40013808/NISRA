
/*
  ======================================================
            BACK TO TOP LINK

  ======================================================
*/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



/*
  ======================================================
            SKIP TO MAIN CONTENT LINK

  ======================================================
*/



$( document ).ready(function() {
        // bind a click event to the 'skip' link
        $(".skip").click(function(event){

            // strip the leading hash and declare
            // the content we're skipping to
            var skipTo="#"+this.href.split('#')[1];

            // Setting 'tabindex' to -1 takes an element out of normal
            // tab flow but allows it to be focused via javascript
            $(skipTo).attr('tabindex', -1).on('blur focusout', function () {

                // when focus leaves this element,
                // remove the tabindex attribute
                $(this).removeAttr('tabindex');

            }).focus(); // focus on the content container
        });
    });





    /*
      ======================================================
                NAV BAR TOGGLE BUTTON

      ======================================================
    */



    function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
