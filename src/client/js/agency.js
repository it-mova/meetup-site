/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
function activateScrolling() {
    $(function () {
        $('a.page-scroll').on('click', function (event) {
            var $anchor = $(this);
            var ref = $anchor.attr('href');
            console.log("navigating to " + ref);
            $('html, body').stop().animate({
                scrollTop: $(ref).offset().top
            }, 1500, 'easeInOutExpo',function(){location.hash = ref;});
            event.preventDefault();
        });
    });

// Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    })

// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });
}