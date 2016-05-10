// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
        duration: $(".pahlawan").eq("0").offset().top - $("#header").offset().top,    // the scene should last for a scroll distance of 100px
        offset: 0        // start this scene after scrolling for 50px
    })
    .setPin("#scrolldown") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

(function($) {
    var wh = window.innerHeight,
        $iphone = $('.iphone'),
        $screenC = $('.screenC');
 
    // Keep adding code here
 
})(jQuery);