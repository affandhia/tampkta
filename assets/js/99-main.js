// // init controller
var controller = new ScrollMagic.Controller();

var hController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

var header = new ScrollMagic.Scene({triggerElement: "#parallax1"})
	.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
	.addTo(hController);

// create a scene
var header = new ScrollMagic.Scene({
        triggerHook: "onLeave",
        triggerElement: "#scrolldown",
        offset: 0,   // the scene should last for a scroll distance of 100px
    })
    .setPin("#scrolldown") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

    var popKuis = $(".pop-kuis");

// Antasari
var identitas = new ScrollMagic.Scene({
        triggerElement: ".scene-identitas",
        triggerHook: 0,
        duration: 5000
    }).setTween((new TimelineMax())
        // .set(".scene-identitas *", {autoAlpha:0})
        .fromTo(".lahir .tanggal", 10, {
            scale: 100, 
            top: 600, 
            left: centerPosition(".lahir .tanggal"), 
            autoAlpha: 0,  position: "absolute" 
        }, {
            scale: 5,
            autoAlpha:1, 
            top: centerPositionH(".lahir .tanggal"),
            ease : Power3.easeOut
        })
        .to(".lahir .tanggal", 10, {
            autoAlpha:0, 
            ease : Power4.easeOut
        }, '+=3')
        .fromTo(".lahir .narasi", 10, {
            top: centerPositionH(".lahir .narasi"),
            left: centerPosition(".lahir .narasi") - 200, 
            autoAlpha: 0,
            position: "absolute" 
        }, {
            autoAlpha:1, 
            left: centerPosition(".lahir .narasi"), 
            ease : Power3.easeOut
        })
        .to(".lahir .narasi", 10, {
            left: centerPosition(".lahir .narasi") + 200, 
            autoAlpha: 0,
            ease : Power4.easeIn
        })
        .fromTo(".lahir .tempat", 10, {
            top:0, 
            left: 800, 
            autoAlpha: 0, 
            position: "absolute"
        }, {
            autoAlpha:1
        })
        .fromTo(".scene-identitas", 10, {
            left: 0, 
            position: "absolute"
        }, {
            left: -window.innerWidth * 2,
            ease: Expo.easeIn
        })
    )
    .setPin(".scene-identitas")
    .addIndicators()
    .addTo(controller);

var identitas = new ScrollMagic.Scene({
        triggerElement: ".scene-kiprah",
        duration: 2000,
        offset: 2000
    })
    // .setTween((new TimelineMax())
//         .set(".scene-kiprah *", {autoAlpha:0})
//     )
//     .addIndicators()
//     .addTo(controller);

// var identitas = new ScrollMagic.Scene({
//         triggerElement: ".scene-ketahanan",
//         duration: 2000,
//         offset: 4000    
//     }).setTween((new TimelineMax())
//         .set(".scene-ketahanan *", {autoAlpha:0})
//     )
//     .addIndicators()
//     .addTo(controller);

// var scene1 = new ScrollMagic.Scene({
//         triggerElement: ".pahlawan",
//         duration: 2000
//     })
//     .setTween((new TimelineMax())
//         .to("body", 1, {backgroundColor: "#A2967E", ease : Linear.easeNone})
//         .set(".map", {left: centerPosition(".map")})
//         .from(".map", 1, {autoAlpha:0, left: centerPosition(".map"), scale:2, ease : Linear.easeNone})
//         .to(".map", 1, {autoAlpha:0, scale:2, ease : Linear.easeNone})
//         .to(popKuis, 0.4, {opacity: 1, left: (window.innerWidth / 2 - popKuis.width() / 2), ease: Linear.easeNone})
//         .staggerFrom(".card", 1, {autoAlpha:0, top:100, ease:  Linear.easeNone},0.3)
//         .to(popKuis, 0.4, {autoAlpha: 0, left: (window.innerWidth / 2 - popKuis.width() / 2), ease: Linear.easeNone})
//     ) // pins the element for the the scene's duration
//     .addIndicators()
//     .addTo(controller); // assign the scene to the controller

function centerPosition(object) {
    return window.innerWidth / 2 - $(object).width() / 2;
}

function centerPositionH(object) {
    return window.innerHeight / 2 - $(object).height() / 2;
}

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

