var crs = document.querySelector(".coursor");
var blur = document.querySelector(".coursor2")
document.addEventListener("mousemove", function (v) {
    crs.style.top = v.y - 10 + "px";
    crs.style.left = v.x - 10 + "px";
    blur.style.top = v.y - 200 + "px";
    blur.style.left = v.x - 180 + "px";
});




gsap.to(".nav", {
    height: "120px",
    backgroundColor: "black",
    // duration: 0.5,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1

    }

}
);
gsap.to(".main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".main",
        scroll: "body",
        start: "top -20%",
        end: "top -50%",
        scrub: 2
    }

})