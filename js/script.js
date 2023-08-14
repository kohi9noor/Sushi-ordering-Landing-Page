var tl = gsap.timeline()


tl.from(".header__logo h4",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0
})

tl.from(".header__nav ul", { 
    duration:1,
    opacity:0,
})

tl.from(".hero-image img",{
    duration:1,
    opacity:0,
})

tl.from(".hero-content h1 ", {
    x:100,
    duration:1,
    opacity:0
})

tl.from(".hero-content p", {
    x:100,
    duration:1,
    opacity:0
})

tl.from(".about-us__image img", {
    x:-100,
    duration:1,
    opacity:0
})

tl.from(".about-us__content h3",{
    duration1,
    y:100,
    opacity:0
})
