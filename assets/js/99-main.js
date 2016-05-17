// // init controller
var controller = new ScrollMagic.Controller();

var hController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

var header = new ScrollMagic.Scene({triggerElement: "#parallax1"})
	.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
	.addTo(hController);

// Antasari
var identitas = new ScrollMagic.Scene({
        triggerElement: ".antasari",
        triggerHook: 0,
        duration: "800%"
    }).setTween((new TimelineMax())
        .to(".scene-identitas", 5, {
            backgroundColor: "#E21300"
        })
        .fromTo(".lahir .tanggal", 10, {
            scale: 100, 
            top: 600, 
            left: centerPosition(".lahir .tanggal"), 
            autoAlpha: 0,  position: "absolute",
            textAlign:"center"
        }, {
            scale: 5,
            autoAlpha:1, 
            top: centerPositionH(".lahir .tanggal"),
            ease : Power3.easeOut
        })
        .to(".lahir .tanggal", 10, {
            autoAlpha:0, 
            ease : Power4.easeOut,
        }, '+=10')
        .fromTo(".lahir .narasi", 10, {
            scale:1.3,
            top: centerPositionH(".lahir .narasi"),
            left: centerPosition(".lahir .narasi") - 200, 
            autoAlpha: 0,
            position: "absolute" 
        }, {
            autoAlpha:1, 
            left: centerPosition(".lahir .narasi"), 
            ease : Power3.easeOut
        }, "-=7")
        .to(".lahir .narasi", 10, {
            left: centerPosition(".lahir .narasi") + 200, 
            autoAlpha: 0,
            ease : Power4.easeIn
        })
        .fromTo($(".lahir .map-id").eq(0), 8, {
            top:centerPositionH(".lahir .map-id"),
            scale:3,
            left: 200, 
            autoAlpha: 0, 
            position: "absolute"
        }, {
            autoAlpha:1,
            scale:0.7,
            ease: Power3.easeIn,
            top: centerPositionH(".lahir .map-id") + 100
        })
        .fromTo($(".lahir .map-id").eq(1), 8, {
            top:centerPositionH(".lahir .map-id"),
            scale:3,
            left: 200, 
            autoAlpha: 0, 
            position: "absolute"
        }, {
            autoAlpha:0.2,
            scale:1.7,
            ease: Power3.easeIn,
            left: 400,
            top: centerPositionH(".lahir .map-id")
        }, '-=8')
        .fromTo(".lahir .tempat", 10, {
            top:150,
            zindex: 9,
            left: 200, 
            autoAlpha: 0, 
            position: "absolute"
        }, {
            scale:2,
            autoAlpha:1,
            color: "#fff"
        }, "+=10")
        .to(".lahir .tempat", 10, {
            top:150,
            zindex: 9,
            left: 0, 
            autoAlpha: 0
        }, "+= 10")
        .fromTo(".deskirpsi h2", 10, {
            top:centerPositionH(".deskirpsi h2"),
            zindex: 9,
            left: centerPosition(".deskirpsi h2"), 
            autoAlpha: 0,
            textAlign: "center",
            position: "absolute"
        }, {
            scale:2,
            autoAlpha:1,
            color: "#fff"
        })
        .to(".deskirpsi h2", 10, {
            top:150,
            zindex: 9,
            autoAlpha: 0
        }, "+=20")
        .fromTo(".deskirpsi .pengukuhan p.informasi", 10, {
            top:150,
            zindex: 9,
            left: centerPosition(".deskirpsi .pengukuhan p.informasi"), 
            textAlign: "center",
            autoAlpha: 0, 
            position: "absolute"
        }, {
            scale:2,
            autoAlpha:1,
            color: "#fff"
        })
        .to(".deskirpsi .pengukuhan p.informasi", 10, {
            top:150,
            zindex: 9,
            left: 800, 
            autoAlpha: 0
        }, "+=20")
        .fromTo(".deskirpsi .pengukuhan p.tanggal", 10, {
            top:300,
            zindex: 9,
            left: centerPosition(".deskirpsi .pengukuhan p.tanggal"),
            textAlign: "center",
            autoAlpha: 0, 
            position: "absolute"
        }, {
            scale:2,
            autoAlpha:1,
            color: "#fff"
        })
        .to(".deskirpsi .pengukuhan p.tanggal", 10, {
            top:150,
            zindex: 9,
            autoAlpha: 0
        }, "+=20")
        .to($(".lahir .map-id").eq(0), 100, {
            z: 1000,
            ease: Power4.easeIn
        }, '-=70')
        .to($(".lahir .map-id").eq(1), 150, {
            z: 1000,
            ease: Power4.easeIn
        }, '-=100')
    )
    .setPin(".antasari")
    .addIndicators()
    .addTo(controller);

var kiprah = new ScrollMagic.Scene({
    triggerHook : "onLeave",
    triggerElement : ".antasari-1",
    duration: 5000
}).setTween((new TimelineMax())
        .set(".scene-kiprah", {
            backgroundColor: "#E21300"
        })
        .fromTo(".scene-kiprah .tanggal", 40, {
            scale: 100, 
            top: 600, 
            left: centerPosition(".scene-kiprah .tanggal"), 
            autoAlpha: 0,  position: "absolute",
            textAlign:"center"
        }, {
            scale: 5,
            autoAlpha:1, 
            top: centerPositionH(".scene-kiprah .tanggal"),
            ease : Power3.easeOut
        })
        .to(".scene-kiprah .tanggal", 40, {
            autoAlpha:0, 
            ease : Power4.easeOut,
        }, '+=40')
        .fromTo(".scene-kiprah .map-id1", 100, { 
            bottom: "-100%", 
            scale: 0.5,
            left: centerPosition(".scene-kiprah .map-id1"), 
            position: "absolute",
            textAlign:"center"
        }, {
            bottom:-10,
            ease : Power1.easeOut
        })
        .fromTo(".scene-kiprah .map-id2", 100, { 
            bottom: "-100%", 
            scale: 1.4,
            left: centerPosition(".scene-kiprah .map-id2"), 
            position: "absolute",
            textAlign:"center"
        }, {
            bottom:0,
            ease : Power1.easeOut
        }, "-=120")
        .fromTo(".scene-kiprah .map-id3", 100, { 
            bottom: "-100%",
            scale: 2,
            left: centerPosition(".scene-kiprah .map-id3"), 
            position: "absolute",
            textAlign:"center"
        }, {
            bottom:-30,
            ease : Power2.easeOut
        }, "-=110")
        .fromTo(".scene-kiprah .pecah", 10, {
            top:150,
            zindex: 9,
            left: centerPosition(".scene-kiprah .pecah"), 
            textAlign: "center",
            autoAlpha: 0, 
            position: "absolute"
        }, {
            scale:2,
            autoAlpha:1,
            color: "#fff"
        },"-=100")
        .to(".scene-kiprah .map-id1", 100, { 
            z:1000,
            ease : Power0.easeNone
        },"+=60")
        .to(".scene-kiprah .map-id2", 100, { 
            z:1600,
            ease : Power0.easeNone
        }, "-=100")
        .to(".scene-kiprah .map-id3", 100, { 
            z:2000,
            ease : Power0.easeNone
        }, "-=120")
        .to(".scene-kiprah .pecah", 100, {
            zindex: 9,
            top:0,
            z: 1000,
            autoAlpha: 0
        }, "-=120")
        .fromTo(".scene-kiprah .judul", 80, {
            top:centerPositionH(".scene-kiprah .judul"),
            left: centerPosition(".scene-kiprah .judul"), 
            textAlign: "center",
            z: 1000,
            autoAlpha: 0, 
            position: "absolute"
        }, {
            scale:2,
            z: 0,
            autoAlpha:1,
            color: "#fff"
        },"-=5")
        .to(".scene-kiprah .judul", 80, {
            z: 1000,
            autoAlpha: 0
        }, "+=50")
        .fromTo(".scene-kiprah .deskripsi", 80, {
            scale:1.3,
            top: centerPositionH(".scene-kiprah .deskripsi"),
            left: centerPosition(".scene-kiprah .deskripsi") - 200, 
            autoAlpha: 0,
            textAlign: "center",
            position: "absolute" 
        }, {
            autoAlpha:1, 
            left: centerPosition(".scene-kiprah .deskripsi"), 
            ease : Power3.easeOut
        }, "-=7")
        .to(".scene-kiprah .deskripsi", 80, {
            left: centerPosition(".scene-kiprah .deskripsi") + 200, 
            autoAlpha: 0,
            ease : Power4.easeIn
        }, "+=50")
    )
    .setPin(".antasari-1")
    .addIndicators()
    .addTo(controller);

var namaScene = "#badContainer";
var currentScene = namaScene + " ";
var ketahanan = new ScrollMagic.Scene({
        triggerElement: namaScene,
        triggerHook: "onLeave",
        duration: "500%"
    }).setTween((new TimelineMax())
        .fromTo(currentScene + ".blue .tanggal", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(currentScene + ".blue .tanggal") / 4, 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 5,
            autoAlpha:1, 
            top: centerPositionH(currentScene + ".blue .tanggal"),
            ease : Power3.easeOut
        })
        .fromTo(currentScene + ".blue .nama", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(currentScene + ".blue .nama") / 4, 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 2,
            autoAlpha:1, 
            top: centerPositionH(currentScene + ".blue .nama"),
            ease : Power3.easeOut
        })
        .to(currentScene + ".blue .tanggal", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "-=0.2")
        .to(currentScene + ".blue .nama", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "-=0.4")
        .fromTo(currentScene + ".blue .surat", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(currentScene + ".blue .surat"), 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 2,
            autoAlpha:1, 
            top: centerPositionH(currentScene + ".blue .surat") - 100,
            ease : Power3.easeOut
        })
        .to(currentScene + ".blue .surat", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "+=0.4")
        .to(currentScene + ".slideContainer", 0.5, {z: -150, delay: 0.3})      // move back in 3D space
        .to(currentScene + ".slideContainer", 1,   {x: "-25%"})    // move in to first panel
        .to(currentScene + ".slideContainer", 0.5, {z: 0})             // move back to origin in 3D space
        // animate to third panel

        .fromTo(currentScene + ".turqoise .tanggal", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(currentScene + ".turqoise .tanggal"), 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 5,
            autoAlpha:1, 
            top: centerPositionH(currentScene + ".turqoise .tanggal") - 150,
            ease : Power3.easeOut
        })
        .fromTo(currentScene + ".turqoise .sk", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(currentScene + ".turqoise .sk") / 4, 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 2,
            autoAlpha:1, 
            top: centerPositionH(currentScene + ".turqoise .sk") - 100,
            ease : Power3.easeOut
        })
        .to(currentScene + ".turqoise .tanggal", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "-=0.2")
        .to(currentScene + ".turqoise .sk", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "-=0.4")
        .fromTo(currentScene + ".turqoise .surat", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(currentScene + ".turqoise .surat"), 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 2,
            autoAlpha:1, 
            top: centerPositionH(currentScene + ".turqoise .surat") - 100,
            ease : Power3.easeOut
        })
        .to(currentScene + ".turqoise .surat", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "+=0.4")
        .to(currentScene + ".slideContainer", 0.5, {z: -150, delay: 1})
        .to(currentScene + ".slideContainer", 1,   {x: "-50%"})
        .to(currentScene + ".slideContainer", 0.5, {z: 0})
        .to(currentScene + ".pop-kuis", 0.4, {opacity: 1, left: (window.innerWidth / 2 - $(currentScene + ".pop-kuis").width() / 2), ease: Linear.easeNone})
        .staggerFrom(currentScene + ".card", 1, {autoAlpha:0, top:100, ease:  Linear.easeNone},0.3)
        .add( function(){ disableScroll() })
        .to(currentScene + ".pop-kuis", 0.4, {autoAlpha: 0, left: (window.innerWidth / 2 - $(currentScene + ".pop-kuis").width() / 2), ease: Linear.easeNone}, "+=10")
        // animate to forth panel
        .to(currentScene + ".slideContainer", 0.5, {z: -150, delay: 1})
        .to(currentScene + ".slideContainer", 1,   {x: "-75%"})
        .to(currentScene + ".slideContainer", 0.5, {z: 0})
    )
    .setPin(namaScene)
    .addIndicators()
    .addTo(controller);

var badaruddin = new ScrollMagic.Scene({
        triggerElement: ".scene-ketahanan",
        triggerHook: "onLeave",
        duration: "500%"
    }).setTween((new TimelineMax())
        .fromTo(".scene-ketahanan .blue .tanggal", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(".scene-ketahanan .blue .tanggal") / 4, 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 5,
            autoAlpha:1, 
            top: centerPositionH(".scene-ketahanan .blue .tanggal"),
            ease : Power3.easeOut
        })
        .fromTo(".scene-ketahanan .blue .nama", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(".scene-ketahanan .blue .nama") / 4, 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 2,
            autoAlpha:1, 
            top: centerPositionH(".scene-ketahanan .blue .nama"),
            ease : Power3.easeOut
        })
        .to(".scene-ketahanan .blue .tanggal", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "-=0.2")
        .to(".scene-ketahanan .blue .nama", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "-=0.4")
        .fromTo(".scene-ketahanan .blue .surat", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(".scene-ketahanan .blue .surat"), 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 2,
            autoAlpha:1, 
            top: centerPositionH(".scene-ketahanan .blue .surat") - 100,
            ease : Power3.easeOut
        })
        .to(".scene-ketahanan .blue .surat", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "+=0.4")
        .to(".scene-ketahanan .slideContainer", 0.5, {z: -150, delay: 0.3})      // move back in 3D space
        .to(".scene-ketahanan .slideContainer", 1,   {x: "-25%"})    // move in to first panel
        .to(".scene-ketahanan .slideContainer", 0.5, {z: 0})             // move back to origin in 3D space
        // animate to third panel

        .fromTo(".scene-ketahanan .turqoise .tanggal", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(".scene-ketahanan .turqoise .tanggal"), 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 5,
            autoAlpha:1, 
            top: centerPositionH(".scene-ketahanan .turqoise .tanggal") - 150,
            ease : Power3.easeOut
        })
        .fromTo(".scene-ketahanan .turqoise .sk", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(".scene-ketahanan .turqoise .sk") / 4, 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 2,
            autoAlpha:1, 
            top: centerPositionH(".scene-ketahanan .turqoise .sk") - 100,
            ease : Power3.easeOut
        })
        .to(".scene-ketahanan .turqoise .tanggal", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "-=0.2")
        .to(".scene-ketahanan .turqoise .sk", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "-=0.4")
        .fromTo(".scene-ketahanan .turqoise .surat", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(".scene-ketahanan .turqoise .surat"), 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 2,
            autoAlpha:1, 
            top: centerPositionH(".scene-ketahanan .turqoise .surat") - 100,
            ease : Power3.easeOut
        })
        .to(".scene-ketahanan .turqoise .surat", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "+=0.4")
        .to(".scene-ketahanan .slideContainer", 0.5, {z: -150, delay: 1})
        .to(".scene-ketahanan .slideContainer", 1,   {x: "-50%"})
        .to(".scene-ketahanan .slideContainer", 0.5, {z: 0})
        .to(".scene-ketahanan .pop-kuis", 0.4, {opacity: 1, left: (window.innerWidth / 2 - $(".scene-ketahanan .pop-kuis").width() / 2), ease: Linear.easeNone})
        .staggerFrom(".scene-ketahanan .card", 1, {autoAlpha:0, top:100, ease:  Linear.easeNone},0.3)
        .add( function(){ disableScroll() })
        .to(".scene-ketahanan .pop-kuis", 0.4, {autoAlpha: 0, left: (window.innerWidth / 2 - $(".scene-ketahanan .pop-kuis").width() / 2), ease: Linear.easeNone}, "+=10")
        // animate to forth panel
        .to(".scene-ketahanan .slideContainer", 0.5, {z: -150, delay: 1}, "+=1")
        .to(".scene-ketahanan .slideContainer", 1,   {x: "-75%"})
        .to(".scene-ketahanan .slideContainer", 0.5, {z: 0})
    )
    .setPin(".scene-ketahanan")
    .addIndicators()
    .addTo(controller);

var namaScene = "#scene";
var currentScene = namaScene + " ";
var ketahanan = new ScrollMagic.Scene({
        triggerElement: namaScene,
        triggerHook: "onLeave",
        duration: "500%"
    }).setTween((new TimelineMax())
        .fromTo(currentScene + ".blue .tanggal", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(currentScene + ".blue .tanggal") / 4, 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 5,
            autoAlpha:1, 
            top: centerPositionH(currentScene + ".blue .tanggal"),
            ease : Power3.easeOut
        })
        .fromTo(currentScene + ".blue .nama", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(currentScene + ".blue .nama") / 4, 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 2,
            autoAlpha:1, 
            top: centerPositionH(currentScene + ".blue .nama"),
            ease : Power3.easeOut
        })
        .to(currentScene + ".blue .tanggal", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "-=0.2")
        .to(currentScene + ".blue .nama", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "-=0.4")
        .fromTo(currentScene + ".blue .surat", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(currentScene + ".blue .surat"), 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 2,
            autoAlpha:1, 
            top: centerPositionH(currentScene + ".blue .surat") - 100,
            ease : Power3.easeOut
        })
        .to(currentScene + ".blue .surat", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "+=0.4")
        .to(currentScene + ".slideContainer", 0.5, {z: -150, delay: 0.3})      // move back in 3D space
        .to(currentScene + ".slideContainer", 1,   {x: "-25%"})    // move in to first panel
        .to(currentScene + ".slideContainer", 0.5, {z: 0})             // move back to origin in 3D space
        // animate to third panel

        .fromTo(currentScene + ".turqoise .tanggal", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(currentScene + ".turqoise .tanggal"), 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 2,
            autoAlpha:1, 
            top: centerPositionH(currentScene + ".turqoise .tanggal") - 150,
            ease : Power3.easeOut
        })
        .fromTo(currentScene + ".turqoise .sk", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(currentScene + ".turqoise .sk") / 4, 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 2,
            autoAlpha:1, 
            top: centerPositionH(currentScene + ".turqoise .sk") - 100,
            ease : Power3.easeOut
        })
        .to(currentScene + ".turqoise .tanggal", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "-=0.2")
        .to(currentScene + ".turqoise .sk", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "-=0.4")
        .fromTo(currentScene + ".turqoise .surat", 1, {
            scale: 100, 
            top: 600, 
            left: centerPosition(currentScene + ".turqoise .surat"), 
            autoAlpha: 0,
            position: "relative"
        }, {
            scale: 2,
            autoAlpha:1, 
            top: centerPositionH(currentScene + ".turqoise .surat") - 100,
            ease : Power3.easeOut
        })
        .to(currentScene + ".turqoise .surat", 1, {
            autoAlpha:0,
            ease : Power0.easeNone
        }, "+=0.4")
        .to(currentScene + ".slideContainer", 0.5, {z: -150, delay: 1})
        .to(currentScene + ".slideContainer", 1,   {x: "-50%"})
        .to(currentScene + ".slideContainer", 0.5, {z: 0})
        .to(currentScene + ".pop-kuis", 0.4, {opacity: 1, left: (window.innerWidth / 2 - $(currentScene + ".pop-kuis").width() / 2), ease: Linear.easeNone})
        .staggerFrom(currentScene + ".card", 1, {autoAlpha:0, top:100, ease:  Linear.easeNone},0.3)
        .add( function(){ disableScroll() })
        .to(currentScene + ".pop-kuis", 0.4, {autoAlpha: 0, left: (window.innerWidth / 2 - $(currentScene + ".pop-kuis").width() / 2), ease: Linear.easeNone}, "+=10")
        // animate to forth panel
        .to(currentScene + ".slideContainer", 0.5, {z: -150, delay: 1})
        .to(currentScene + ".slideContainer", 1,   {x: "-75%"})
        .to(currentScene + ".slideContainer", 0.5, {z: 0})
    )
    .setPin(namaScene)
    .addIndicators()
    .addTo(controller);

// var testContainer = new ScrollMagic.Controller();

// define movement of panels
// var wipeAnimation = new TimelineMax()
//     // animate to second panel
//     .to("#pinContainer .slideContainer", 0.5, {z: -150})      // move back in 3D space
//     .to("#pinContainer .slideContainer", 1,   {x: "-25%"})    // move in to first panel
//     .to("#pinContainer .slideContainer", 0.5, {z: 0})             // move back to origin in 3D space
//     // animate to third panel
//     .to("#pinContainer .slideContainer", 0.5, {z: -150, delay: 1})
//     .to("#pinContainer .slideContainer", 1,   {x: "-50%"})
//     .to("#pinContainer .slideContainer", 0.5, {z: 0})
//     // animate to forth panel
//     .to("#pinContainer .slideContainer", 0.5, {z: -150, delay: 1})
//     .to("#pinContainer .slideContainer", 1,   {x: "-75%"})
//     .to("#pinContainer .slideContainer", 0.5, {z: 0});

// // create scene to pin and link animation
// new ScrollMagic.Scene({
//         triggerElement: "#pinContainer",
//         triggerHook: "onLeave",
//         duration: "500%"
//     })
//     .setPin("#pinContainer")
//     .setTween(wipeAnimation)
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);

// var testContainer = new ScrollMagic.Controller();

// // define movement of panels
// var wipeAnimation = new TimelineMax()
//     // animate to second panel
//     .to("#scene .slideContainer", 0.5, {z: -150})      // move back in 3D space
//     .to("#scene .slideContainer", 1,   {x: "-25%"})    // move in to first panel
//     .to("#scene .slideContainer", 0.5, {z: 0})             // move back to origin in 3D space
//     // animate to third panel
//     .to("#scene .slideContainer", 0.5, {z: -150, delay: 1})
//     .to("#scene .slideContainer", 1,   {x: "-50%"})
//     .to("#scene .slideContainer", 0.5, {z: 0})
//     // animate to forth panel
//     .to("#scene .slideContainer", 0.5, {z: -150, delay: 1})
//     .to("#scene .slideContainer", 1,   {x: "-75%"})
//     .to("#scene .slideContainer", 0.5, {z: 0});

// // create scene to pin and link animation
// new ScrollMagic.Scene({
//         triggerElement: "#scene",
//         triggerHook: "onLeave",
//         duration: "500%"
//     })
//     .setPin("#scene")
//     .setTween(wipeAnimation)
//     .addIndicators() // add indicators (requires plugin)
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
  // if (window.addEventListener) // older FF
  //     window.addEventListener('DOMMouseScroll', preventDefault, false);
  // window.onwheel = preventDefault; // modern standard
  // window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  // window.ontouchmove  = preventDefault; // mobile
  // document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

