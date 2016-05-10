// init controller
var controller = new ScrollMagic.Controller();

// create a scene
var scene1 = new ScrollMagic.Scene({
        duration: $(".pahlawan").eq("0").offset().top - $("#scrolldown").offset().top,    // the scene should last for a scroll distance of 100px
        offset: $("#scrolldown").offset().top  // start this scene after scrolling for 50px
    })
    .setPin("#scrolldown") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

var hController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

var header = new ScrollMagic.Scene({triggerElement: "#parallax1"})
	.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
	.addTo(hController);

(function($) {
    var wh = window.innerHeight,
        $iphone = $('.iphone'),
        $screenC = $('.screenC');
 
    // Keep adding code here
 
})(jQuery);