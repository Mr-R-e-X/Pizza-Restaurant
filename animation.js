gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
});
gsap.to(".page-1-title", {
  x: -200,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".nav-title",
    start: "top 50px",
    endTrigger: ".page-2",
    end: "bottom 50%",
    scrub: true,
  },
});
gsap.from(".page-2-title", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page-1-title",
    start: "top 50%",
    endTrigger: ".page-2-img-container",
    end: "bottom 80%",
    scrub: true,
  },
});

gsap.from(".page-2-text-container", {
  x: -200,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".page-1-title",
    start: "top 50%",
    endTrigger: ".page-2-text-container",
    end: "bottom 60%",
    scrub: true,
  },
});
gsap.from(".page-2-img-container", {
  x: 200,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".page-1-title",
    start: "top 50%",
    endTrigger: ".page-2-img-container",
    end: "bottom 60%",
    scrub: true,
  },
});

gsap.from(".page-3-title", {
  y: -100,
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".page-3",
    start: "top 80%",
    endTrigger: ".page-3-title",
    end: "top 90%",
    scrub: true,
  },
});
gsap.from(".menu-desc", {
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".page-3-title",
    start: "top 50%",
    endTrigger: ".menu-li",
    end: "top 70%",
    scrub: true,
  },
});
gsap.from(".menu-li", {
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".page-3-title",
    start: "top 50%",
    endTrigger: ".menu-li",
    end: "top 70%",
    scrub: true,
  },
});

gsap.from(".page-4-title", {
  y: 100,
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".page-4",
    start: "top 80%",
    endTrigger: ".carousel",
    end: "top 90%",
    scrub: true,
  },
});
gsap.from(".carousel", {
  y: -100,
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".page-4-title",
    start: "top 60%",
    endTrigger: ".carousel",
    end: "top 20%",
    scrub: true,
  },
});
gsap.from(".page-5-title", {
  y: 200,
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".page-5",
    start: "top 80%",
    endTrigger: ".page-5-body",
    end: "top 90%",
    scrub: true,
  },
});
gsap.from(".page-5-body", {
  y: 200,
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".page-5-title",
    start: "top 80%",
    endTrigger: ".page-5-body",
    end: "top 10%",
    scrub: true,
  },
});
gsap.from(".page-6-title", {
  y: 200,
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".page-6",
    start: "top 80%",
    endTrigger: ".contact",
    end: "top 90%",
    scrub: true,
  },
});
gsap.from(".contact", {
  y: 200,
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".page-6-title",
    start: "top 80%",
    endTrigger: ".footer-bottom",
    end: "top 80%",
    scrub: true,
  },
});
// gsap.from(".footer-bottom", {
//   y: 200,
//   opacity: 0,
//   duration: 5,
//   scrollTrigger: {
//     trigger: ".contact",
//     start: "top 30%",
//     // endTrigger: ".footer-bottom",
//     // end: "bottom 5%",
//     // scrub: true,
//   },
// });
