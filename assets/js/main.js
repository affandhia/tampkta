// init controller
var controller = new ScrollMagic.Controller();

var hController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

var header = new ScrollMagic.Scene({triggerElement: "#parallax1"})
	.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
	.addTo(hController);

// create a scene
var header = new ScrollMagic.Scene({
        triggerHook: "onLeave",
        triggerElement: "#scrolldown",
        offset: 0,  
        duration: $(".pahlawan").eq("0").offset().top - $("#scrolldown").offset().top    // the scene should last for a scroll distance of 100px
    })
    .setPin("#scrolldown") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

    var popKuis = $(".pop-kuis");

var scene1 = new ScrollMagic.Scene({
        triggerElement: ".pop-kuis",
        duration: 300
    })
    .setTween(popKuis, 1, {opacity: 1, left: (window.innerWidth / 2 - popKuis.width() / 2)}) // pins the element for the the scene's duration
    .addIndicators()
    .addTo(controller); // assign the scene to the controller

console.log($("#scrolldown").offset().top);

(function($) {
    var wh = window.innerHeight,
        $iphone = $('.iphone'),
        $screenC = $('.screenC');
 
    // Keep adding code here
 
})(jQuery);


// scroll disabler
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

