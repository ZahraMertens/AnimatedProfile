gsap.registerPlugin(CSSRulePlugin, EaselPlugin, MotionPathPlugin, ScrollToPlugin, ScrollTrigger, ExpoScaleEase, RoughEase, SlowMo);


// =============== HERO IMAGE ZOOM
const timelineHeader = gsap.timeline({
  scrollTrigger: {
    duration: 5,
    trigger: ".main-space", // What element triggers the scroll
    scrub: 0.5, // Add a small delay of scrolling and animation. `true` is direct
    start: "top top", // Start at top of Trigger and at the top of the viewport
    end: "+=100% 0px", // The element is 500px hight and end 50px from the top of the viewport
	  pin: true, // Pin the element true or false
    toggleActions: "play reverse play reverse",
  }
});

timelineHeader
  .to(".spaceHero", { scale: 1}, "sameTime")
  .to(".spaceHero", {scale: 7 }, "sameTime")



//============== UFO IMAGE
const tween2 = gsap.timeline();
const controller = new ScrollMagic.Controller();

tween2.to(".ufo-img", {
  duration: 2,
  x: -1000,
  y: 500,
  rotation: 50,
});

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".line-3",
    duration: 3000,
})
.setTween(tween2)
.addIndicators()
.addTo(controller)



// =========== ABOUT SECTION OPACITY
gsap.set('.about-header', {
    opacity: 0
})
  
const headerTween = gsap.timeline( { 
    scrollTrigger: {
      trigger: ".about-header",
      start: "+=100 80%",
      end: "+=300 20%",
      scrub: true,
      markers: true,
      toggleActions: "play reverse play reverse",
    }
});
   
headerTween
    .to('.about-header', { opacity: 1, duration: 10 })
    .to('.about-header', { opacity: 0, duration: 10 }, 10);


gsap.set('.p1', {
    opacity: 0
})
  
const tl = gsap.timeline( { 
    scrollTrigger: {
    trigger: ".about-header",
    start: "+=100 80%",
    end: "+=300 10%",
    scrub: true,
    markers: true,
    toggleActions: "play reverse play reverse",
    }
});
   
tl
  .to('.p1', { opacity: 1, duration: 5 })
  .to('.p1', { opacity: 0, duration: 5 }, 10);



gsap.set('.p2', {
    opacity: 0
})
      
const tl2 = gsap.timeline( { 
  scrollTrigger: {
    trigger: ".p1",
    start: "+=100 80%",
    end: "+=300 10%",
    scrub: true,
    markers: true,
    toggleActions: "play reverse play reverse",
  }
});
       
tl2
  .to('.p2', { opacity: 1, duration: 3 })
  .to('.p2', { opacity: 0, duration: 3 }, 10);




// =========== ASTRONOUT MOVEMENT 
const tween4 = gsap.timeline();

tween4.to(".astronout-img", {
  x: 600,
  y: 400,
  rotation: 50,
});

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".trigger-astro",
    duration: 2000,
})
.setTween(tween4)
.addIndicators()
.addTo(controller)



// const tween3 = gsap.timeline();

// tween3.to(".jump-fish", {
//   duration: 1,
// //   scrollTrigger: ".bird1",
//   ease: "power1.inOut",
//   motionPath: {
//       path: [
//         {x: -100, y: -100},
//         {x: -300, y: -100},
//         {x: -400, y: -300},
//         {x: -400, y: -400},
//         {x: -500, y: -50},  
//       ],
//       curviness: 1.25,
//       autoRotate: true
//   }
// //   x: -800,
// //   y: -700,
// //   rotation: -160,
// });

// const scene3 = new ScrollMagic.Scene({
//     triggerElement: ".bird1",
//     duration: 1000,
// })
// .setTween(tween3)
// .addIndicators()
// .addTo(controller)


//================= Alient opacity 

gsap.set('.svg-container', {
  opacity: 0.6
})
    
const tl3 = gsap.timeline( { 
scrollTrigger: {
  trigger: ".astronout-img",
  start: "+=100 80%",
  end: "+=300 10%",
  scrub: true,
  markers: true,
  toggleActions: "play reverse play reverse",
}
});
     
tl3
.to('.svg-container', { opacity: 1, duration: 3 })


// ============ ALIEN MOVE

const tween5 = gsap.timeline();

tween5.to(".svg-container", {
  x: -100,
  y: 80,
  rotation: 100,
});

const scene5 = new ScrollMagic.Scene({
    triggerElement: ".astronout-img",
    duration: 3000,
})
.setTween(tween5)
.addIndicators()
.addTo(controller)


//=============== CLOUDS
const tween6 = gsap.timeline();

tween6.to(".cloud3", {
  x: -400,
  y: -100,
})

const scene6 = new ScrollMagic.Scene({
  triggerElement: ".main4",
  duration: 1000,
})
.setTween(tween6)
.addIndicators()
.addTo(controller)

const tween7 = gsap.timeline();

tween7.to(".cloud2", {
  x: 400,
  y: 300,
})

const scene7 = new ScrollMagic.Scene({
  triggerElement: ".main4",
  duration: 2000,
})
.setTween(tween7)
.addIndicators()
.addTo(controller)

const tween8 = gsap.timeline();

tween8.to(".cloud1", {
  x: 500,
  y: 300,
})

const scene8 = new ScrollMagic.Scene({
  triggerElement: ".main4",
  duration: 3000,
})
.setTween(tween8)
.addIndicators()
.addTo(controller)



//=======PARRALLAX EFFECT 

gsap.timeline({
  scrollTrigger: {
    trigger: ".main7",
    scrub: true,
    start: "top top",
    end: "+=2000",
    pin: true
  }
})
.to(".mountain-img1", {scale: 1.1}, 2)

gsap.to(".mountain-img", {
  scrollTrigger: {
    scrub: 1,
    trigger: ".main7"
  },
  y: -200,
})








   
